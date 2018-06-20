import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import SearchBar from '../../../components/searchBar'
import { ListView } from './ListView'
import { GridView } from './GridView'
import { MapView } from './MapView'
import { StyledSiteList } from './StyledSiteList'
import { SelectModeRightComponent } from './SelectModeRightComponent'

export class SiteList extends Component {
  state = {
    menuAnchor: null,
    selectedItems: [],
    selectMode: false,
  }

  async componentDidMount() {
    const { userId, sitesLoaded, fetchSitesRealTime } = this.props
    const { setSearchComponent, addUnsubscriber } = this.context

    this.setNav()

    setSearchComponent(<SearchBar onSearch={this.onSearch} />)

    !sitesLoaded && addUnsubscriber(await fetchSitesRealTime(userId))
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

  setNav = () => {
    const { setNavTitle, setRightNavComponent } = this.context
    const { openSearchBar } = this.props

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
  }

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

  setSelectedItems = selectedItems => this.setState({ selectedItems })

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

      setRightNavComponent(<SelectModeRightComponent />)

      searchMode && setSearchOnBottom()
    } else {
      setNavColor('primary')
      removeLefNavComponent()
      setSearchOnTop()

      this.setNav()
      this.setSelectedItems([])
    }

    this.setState({ selectMode })
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
    const { menuAnchor, selectedItems, selectMode } = this.state

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
              return (
                <ListView
                  sites={sitesToShow}
                  selectedItems={selectedItems}
                  selectMode={selectMode}
                  setSelectedItems={this.setSelectedItems}
                  setSelectMode={this.setSelectMode}
                />
              )

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
