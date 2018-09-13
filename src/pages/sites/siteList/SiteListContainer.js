import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { SiteList } from './SiteList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import {
  setView,
  toggleView,
  fetchSitesRealTime,
  searchSites,
} from '../../../store/actions/actionCreators/siteActions/'

const mapStateToProps = ({ firebase, searchBar, site }) => {
  const { open, query, results } = searchBar
  const { view, sitesLoaded, sites } = site

  return {
    userId: firebase.auth.uid,
    searchBarOpen: open,
    searchResults: results,
    query,
    view,
    sitesLoaded,
    sites,
  }
}

const mapDispatchToProps = {
  openSearchBar,
  closeSearchBar,
  setView,
  toggleView,
  fetchSitesRealTime,
  searchSites,
}

const enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const SiteListContainer = enhance(SiteList)
