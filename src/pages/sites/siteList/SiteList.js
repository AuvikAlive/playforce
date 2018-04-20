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
  state = { unsubscribe: undefined, view: 'list' }

  async componentDidMount() {
    const { userId, fetchSitesRealTime } = this.props
    const { setNavTitle, setSearchComponent } = this.context

    setNavTitle('Sites')
    this.setRightNav()
    setSearchComponent(<SearchBar />)

    const unsubscribe = await fetchSitesRealTime(userId)
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
    const { match, searchBarOpen, sitesLoaded, sites } = this.props
    const { view } = this.state

    return sitesLoaded ? (
      <StyledSiteList className="StyledSiteList">
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
          <ListView sites={sites} />
        ) : (
          <GridView sites={sites} />
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
