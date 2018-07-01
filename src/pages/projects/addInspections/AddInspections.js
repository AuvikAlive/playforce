import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import SearchBar from '../../../components/searchBar'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'
import { differenceWith } from 'lodash'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { InspectionListView } from '../../../components/inspectionListView/InspectionListView'
import { StyledAddInspections } from './StyledAddInspections'

export class AddInspections extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  async componentDidMount() {
    const { addUnsubscriber, setSearchComponent } = this.context
    const {
      inspectionsLoaded,
      fetchInspectionsRealTime,
      fetchProjectMembersRealTime,
      userId,
      id,
    } = this.props

    this.setNav()

    setSearchComponent(<SearchBar onSearch={this.onSearch} />)

    !inspectionsLoaded &&
      addUnsubscriber(await fetchInspectionsRealTime(userId))
    addUnsubscriber(await fetchProjectMembersRealTime(userId, id))
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
      removeSearchComponent,
    } = this.context
    const { searchBarOpen, closeSearchBar } = this.props

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()
    searchBarOpen && closeSearchBar()
    removeSearchComponent()
  }

  setNav = () => {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const { history, openSearchBar } = this.props

    setNavTitle(`Add Inspections`)

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>
    )
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

      this.setNav()
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

  onSearch = async query => {
    const { inspections } = this.props
    const inputValue = query.trim().toLowerCase()
    const inputLength = inputValue.length

    return inputLength === 0
      ? []
      : inspections.filter(
          ({ name }) => name.toLowerCase().slice(0, inputLength) === inputValue
        )
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
