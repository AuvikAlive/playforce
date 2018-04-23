import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import GridOnIcon from 'material-ui-icons/GridOn'
import ListIcon from 'material-ui-icons/List'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import SearchBar from '../../../components/searchBar'
import { ListView } from './ListView'
import { GridView } from './GridView'
import { StyledSiteList } from './StyledSiteList'

export class SiteList extends Component {
  state = { unsubscribe: undefined }

  async componentDidMount() {
    const { userId, sitesLoaded, fetchSitesRealTime, view } = this.props
    const { setNavTitle, setSearchComponent } = this.context

    setNavTitle('Sites')
    this.setRightNav(view)
    setSearchComponent(<SearchBar onSearch={this.onSearch} />)

    !sitesLoaded && fetchSitesRealTime(userId)
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

  onSearch = query => {
    const { searchSites, userId } = this.props
    return searchSites(userId, query)
  }

  setRightNav = view => {
    const { openSearchBar, toggleSiteListView } = this.props
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
            onClick={toggleSiteListView}
          >
            <GridOnIcon />
          </IconButton>
        )}

        {view === 'grid' && (
          <IconButton
            color="inherit"
            aria-label="List View"
            onClick={toggleSiteListView}
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
      searchBarOpen,
      searchResults,
      sitesLoaded,
      sites,
      view,
    } = this.props
    const sitesToShow =
      searchBarOpen && searchResults.length > 0 ? searchResults : sites

    return sitesLoaded ? (
      <StyledSiteList className={`StyledSiteList ${view === 'grid' && 'grid'}`}>
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a site"
            className={!searchBarOpen && isEmpty(sites) ? 'pulse' : ''}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {view === 'list' ? (
          <ListView sites={sitesToShow} />
        ) : (
          <GridView sites={sitesToShow} />
        )}
      </StyledSiteList>
    ) : (
      <LinearProgress />
    )
  }
}

SiteList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
}
