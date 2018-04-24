import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import GridOnIcon from 'material-ui-icons/GridOn'
import ListIcon from 'material-ui-icons/List'
// import Chip from 'material-ui/Chip'
import { isEmpty } from 'react-redux-firebase'
import { StyledInspectionList } from './StyledInspectionList'
import SearchBar from '../../../components/searchBar'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { ListView } from './ListView'
import { GridView } from './GridView'

export class InspectionList extends Component {
  componentDidMount() {
    const {
      standardsLoaded,
      fetchStandards,
      userId,
      inspectionsLoaded,
      fetchInspectionsRealTime,
      view,
    } = this.props
    const { setNavTitle, setSearchComponent } = this.context

    setNavTitle('Inspections')
    this.setRightNav(view)
    setSearchComponent(<SearchBar />)
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

  setRightNav = view => {
    const { openSearchBar, toggleView } = this.props
    const { setRightNavComponent } = this.context

    setRightNavComponent(
      <div>
        <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
          <SearchIcon />
        </IconButton>

        {view === 'list' && (
          <IconButton
            color="inherit"
            aria-label="Grid View"
            onClick={toggleView}
          >
            <GridOnIcon />
          </IconButton>
        )}

        {view === 'grid' && (
          <IconButton
            color="inherit"
            aria-label="List View"
            onClick={toggleView}
          >
            <ListIcon />
          </IconButton>
        )}
      </div>
    )
  }

  render() {
    const {
      match,
      inspectionsLoaded,
      inspections,
      standardsLoaded,
      standards,
      view,
    } = this.props

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
          <ListView inspections={inspections} match={match} />
        ) : (
          <GridView
            inspections={inspections}
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
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
}
