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
  state = { unsubscribe: undefined, view: 'list' }

  async componentDidMount() {
    const {
      standardsLoaded,
      fetchStandards,
      userId,
      fetchInspectionsRealTime,
    } = this.props
    const { setNavTitle, setSearchComponent } = this.context

    setNavTitle('Inspections')
    this.setRightNav()
    setSearchComponent(<SearchBar />)
    !standardsLoaded && fetchStandards(userId)

    const unsubscribe = await fetchInspectionsRealTime(userId)
    this.setState({ unsubscribe })
  }

  componentWillUnmount() {
    const { closeSearchBar } = this.props
    const {
      removeNavTitle,
      removeRightNavComponent,
      removeSearchComponent,
    } = this.context
    const { unsubscribe } = this.state

    removeNavTitle()
    removeRightNavComponent()
    closeSearchBar()
    removeSearchComponent()
    unsubscribe()
  }

  setRightNav = () => {
    const { openSearchBar } = this.props
    const { setRightNavComponent } = this.context
    const { view } = this.state

    setRightNavComponent(
      <div>
        <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
          <SearchIcon />
        </IconButton>

        {view === 'list' && (
          <IconButton
            color="inherit"
            aria-label="Grid View"
            onClick={this.toggleView}
          >
            <GridOnIcon />
          </IconButton>
        )}

        {view === 'grid' && (
          <IconButton
            color="inherit"
            aria-label="List View"
            onClick={this.toggleView}
          >
            <ListIcon />
          </IconButton>
        )}
      </div>
    )
  }

  toggleView = () => {
    const { view } = this.state
    this.setState({ view: view === 'list' ? 'grid' : 'list' }, () => {
      this.setRightNav()
    })
  }

  render() {
    const {
      match,
      inspectionsLoaded,
      inspections,
      standardsLoaded,
      standards,
    } = this.props
    const { view } = this.state

    return inspectionsLoaded && (view === 'list' || standardsLoaded) ? (
      <StyledInspectionList className="StyledInspectionList">
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
