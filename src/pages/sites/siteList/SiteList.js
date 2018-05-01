import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import SearchBar from '../../../components/searchBar'
import { ListView } from './ListView'
import { GridView } from './GridView'
import { MapView } from './MapView'
import { StyledSiteList } from './StyledSiteList'

export class SiteList extends Component {
  state = {
    menuAnchor: null,
  }

  componentDidMount() {
    const {
      userId,
      sitesLoaded,
      fetchSitesRealTime,
      openSearchBar,
    } = this.props
    const {
      setNavTitle,
      setSearchComponent,
      setRightNavComponent,
    } = this.context

    setNavTitle('Sites')
    setRightNavComponent(
      <div>
        <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="More" onClick={this.openMenu}>
          <MoreVertIcon aria-label="More" />
        </IconButton>
      </div>
    )
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

  // componentWillReceiveProps({ view }) {
  //   view !== this.props.view && this.setRightNav(view)
  // }

  onSearch = query => {
    const { searchSites, userId } = this.props
    return searchSites(userId, query)
  }

  openMenu = event => {
    this.setState({ menuAnchor: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ menuAnchor: null })
  }

  changeView = view => {
    const { setView } = this.props
    this.closeMenu()
    setView(view)
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
    const { menuAnchor } = this.state

    const sitesToShow =
      searchBarOpen && searchResults.length > 0 ? searchResults : sites

    return sitesLoaded ? (
      <StyledSiteList
        className={`StyledSiteList ${view !== 'list' && 'full-width'}`}
      >
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

        {(() => {
          switch (view) {
            case 'list':
              return <ListView sites={sitesToShow} />

            case 'grid':
              return <GridView sites={sitesToShow} />

            case 'map':
              return <MapView sites={sitesToShow} />

            default:
              return null
          }
        })()}

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={this.closeMenu}
          MenuListProps={{ disablePadding: true }}
        >
          {view !== 'grid' && (
            <MenuItem onClick={() => this.changeView('grid')}>
              Show as Grid
            </MenuItem>
          )}

          {view !== 'list' && (
            <MenuItem onClick={() => this.changeView('list')}>
              Show as List
            </MenuItem>
          )}

          {view !== 'map' && (
            <MenuItem onClick={() => this.changeView('map')}>
              Show as Map
            </MenuItem>
          )}
        </Menu>
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
