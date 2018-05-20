import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
// import Chip from 'material-ui/Chip'
import { isEmpty } from 'react-redux-firebase'
import { StyledInspectionList } from './StyledInspectionList'
import SearchBar from '../../../components/searchBar'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { ListView } from './ListView'
import { GridView } from './GridView'
import { DefaultModeRightComponent } from './defaultModeRightComponent'
import { SelectModeRightComponent } from './selectModeRightComponent'

export class InspectionList extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  componentDidMount() {
    const {
      standardsLoaded,
      fetchStandards,
      userId,
      inspectionsLoaded,
      fetchInspectionsRealTime,
    } = this.props
    const { setSearchComponent } = this.context

    this.setNav()

    setSearchComponent(<SearchBar onSearch={this.onSearch} />)

    !standardsLoaded && fetchStandards(userId)
    !inspectionsLoaded && fetchInspectionsRealTime(userId)
  }

  componentWillUnmount() {
    const { searchBarOpen, closeSearchBar } = this.props
    const {
      removeNavTitle,
      removeRightNavComponent,
      removeSearchComponent,
    } = this.context

    removeNavTitle()
    removeRightNavComponent()
    searchBarOpen && closeSearchBar()
    removeSearchComponent()
  }

  componentWillReceiveProps({ view }) {
    view !== this.props.view && this.setRightNav(view)
  }

  onSearch = async query => {
    const { searchInspections, userId } = this.props

    return searchInspections(userId, query)
  }

  setNav = () => {
    const { setNavTitle } = this.context
    const { view } = this.props

    setNavTitle('Inspections')
    this.setRightNav(view)
  }

  setRightNav = view => {
    const { openSearchBar, toggleView } = this.props
    const { setRightNavComponent } = this.context

    setRightNavComponent(
      <DefaultModeRightComponent
        view={view}
        openSearchBar={openSearchBar}
        toggleView={toggleView}
      />
    )
  }

  archiveInspections = async () => {
    const { archiveInspections, userId } = this.props
    const { selectedItems } = this.state

    try {
      await archiveInspections(userId, selectedItems)
      this.setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  unarchiveInspections = async () => {
    const { unarchiveInspections, userId } = this.props
    const { selectedItems } = this.state

    try {
      await unarchiveInspections(userId, selectedItems)
      this.setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  deleteInspections = async () => {
    const { deleteInspections, userId } = this.props
    const { selectedItems } = this.state

    try {
      await deleteInspections(userId, selectedItems)
      this.setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  setSelectedItems = selectedItems => this.setState({ selectedItems })

  setSelectMode = (selectMode, selectedItemsLength) => {
    if (selectMode) {
      const {
        setNavTitle,
        setLeftNavComponent,
        setRightNavComponent,
      } = this.context
      const { searchResults } = this.props

      setNavTitle(selectedItemsLength)

      setLeftNavComponent(
        <IconButton
          color="inherit"
          aria-label="Search"
          onClick={() => this.setSelectMode(false)}
        >
          <ArrowBackIcon />
        </IconButton>
      )

      setRightNavComponent(
        <SelectModeRightComponent
          unarchive={searchResults.length > 0}
          archiveInspections={this.archiveInspections}
          unarchiveInspections={this.unarchiveInspections}
          deleteInspections={this.deleteInspections}
        />
      )
    } else {
      const { removeLefNavComponent } = this.context

      removeLefNavComponent()

      this.setNav()
      this.setSelectedItems([])
    }

    this.setState({ selectMode })
  }

  render() {
    const {
      match,
      inspectionsLoaded,
      inspections,
      standardsLoaded,
      standards,
      view,
      searchBarOpen,
      searchResults,
    } = this.props
    const { selectedItems, selectMode } = this.state

    const inspectionsToShow =
      (searchBarOpen && searchResults && searchResults.length > 0) ||
      (selectMode && searchResults.length > 0)
        ? searchResults
        : inspections

    return inspectionsLoaded && (view === 'list' || standardsLoaded) ? (
      <StyledInspectionList
        className={`StyledInspectionList ${view === 'grid' && 'grid'}`}
      >
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={isEmpty(inspections) ? 'pulse' : ''}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {view === 'list' ? (
          <ListView
            inspections={inspectionsToShow}
            selectedItems={selectedItems}
            selectMode={selectMode}
            setSelectedItems={this.setSelectedItems}
            setSelectMode={this.setSelectMode}
          />
        ) : (
          <GridView
            inspections={inspectionsToShow}
            match={match}
            standards={standards}
          />
        )}
      </StyledInspectionList>
    ) : (
      <LinearProgress />
    )
  }
}

InspectionList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
}
