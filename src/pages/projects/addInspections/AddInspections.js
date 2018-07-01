import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddIcon from '@material-ui/icons/Add'
import { differenceWith } from 'lodash'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { InspectionListView } from '../../../components/inspectionListView/InspectionListView'
import { onComponentDidMount } from './onComponentDidMount'
import { onComponentWillUnmount } from './onComponentWillUnmount'
import { setInspectionNav } from '../utilities/setInspectionNav'
import { StyledAddInspections } from './StyledAddInspections'

export class AddInspections extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  setSelectedItems = selectedItems => this.setState({ selectedItems })

  setSelectMode = (selectMode, selectedItemsLength) => {
    const {
      setNavColor,
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
      setSearchOnBottom,
      setSearchOnTop,
    } = this.context

    if (selectMode) {
      const { searchBarOpen, searchResults } = this.props
      const searchMode =
        searchBarOpen && searchResults && searchResults.length > 0

      setNavColor('default')
      setNavTitle(selectedItemsLength)

      setLeftNavComponent(
        <IconButton
          color="inherit"
          aria-label="back"
          onClick={() => this.setSelectMode(false)}
        >
          <ArrowBackIcon />
        </IconButton>
      )

      setRightNavComponent(
        <IconButton
          color="inherit"
          aria-label="add to project"
          onClick={this.addInspections}
        >
          <AddIcon />
        </IconButton>
      )

      searchMode && setSearchOnBottom()
    } else {
      setSearchOnTop()
      setNavColor('primary')

      setInspectionNav(this, 'Add Inspections')
      this.setSelectedItems([])
    }

    this.setState({ selectMode })
  }

  addInspections = async () => {
    const { selectedItems } = this.state
    const { addInspections, userId, id } = this.props

    try {
      await addInspections(userId, id, selectedItems)
      this.setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { selectedItems, selectMode } = this.state
    const {
      inspectionsLoaded,
      projectMembersLoaded,
      inspections,
      projectMembers,
      searchBarOpen,
      searchResults,
    } = this.props

    const inspectionsToShow =
      searchBarOpen && searchResults && searchResults.length > 0
        ? differenceWith(
            searchResults,
            projectMembers,
            (arrVal, othVal) => arrVal.id === othVal.id
          )
        : differenceWith(
            inspections,
            projectMembers,
            (arrVal, othVal) => arrVal.id === othVal.id
          )

    return inspectionsLoaded && projectMembersLoaded ? (
      <StyledAddInspections className="StyledAddInspections">
        <SelectableList
          inspections={inspectionsToShow}
          ListView={InspectionListView}
          selectedItems={selectedItems}
          selectMode={selectMode}
          setSelectedItems={this.setSelectedItems}
          setSelectMode={this.setSelectMode}
          handleClick={this.handleSelectClick}
        />
      </StyledAddInspections>
    ) : (
      <LinearProgress />
    )
  }
}

AddInspections.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
  setNavColor: PropTypes.func,
  setSearchOnTop: PropTypes.func,
  setSearchOnBottom: PropTypes.func,
}
