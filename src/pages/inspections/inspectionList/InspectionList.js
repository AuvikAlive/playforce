import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { isEmpty } from 'react-redux-firebase'
import { StyledInspectionList } from './StyledInspectionList'
import SearchBar from '../../../components/searchBar'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { SelectableList } from '../../../components/selectableList/SelectableList'
import { ListView } from './ListView'
import { GridView } from './GridView'
import { DefaultModeRightComponent } from './DefaultModeRightComponent'
import { SelectRightComponentContainer } from './selectRightComponent/SelectRightComponentContainer'

export class InspectionList extends Component {
  state = {
    selectedItems: [],
    selectMode: false,
  }

  async componentDidMount() {
    const {
      standardsLoaded,
      fetchStandards,
      userId,
      inspectionsLoaded,
      fetchInspectionsRealTime,
    } = this.props
    const { setSearchComponent, addUnsubscriber } = this.context

    this.setNav()

    setSearchComponent(<SearchBar onSearch={this.onSearch} />)

    !standardsLoaded && fetchStandards(userId)
    !inspectionsLoaded &&
      addUnsubscriber(await fetchInspectionsRealTime(userId))
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

  handleSelectClick = id => {
    const { history, match } = this.props
    history.push(`${match.url}/edit/${id}`)
  }

  setSelectedItems = selectedItems => this.setState({ selectedItems })
  getSelectedItems = () => this.state.selectedItems

  setSelectMode = (selectMode, selectedItemsLength) => {
    const {
      setNavColor,
      setNavTitle,
      setLeftNavComponent,
      removeLefNavComponent,
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
        <SelectRightComponentContainer
          unarchive={searchMode}
          getSelectedItems={this.getSelectedItems}
          setSelectMode={this.setSelectMode}
        />
      )

      searchMode && setSearchOnBottom()
    } else {
      setSearchOnTop()
      setNavColor('primary')
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
      searchBarOpen && searchResults && searchResults.length > 0
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
          <SelectableList
            inspections={inspectionsToShow}
            selectedItems={selectedItems}
            selectMode={selectMode}
            setSelectedItems={this.setSelectedItems}
            setSelectMode={this.setSelectMode}
            handleClick={this.handleSelectClick}
            ListView={ListView}
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
  setNavColor: PropTypes.func,
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
  setSearchOnTop: PropTypes.func,
  setSearchOnBottom: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
