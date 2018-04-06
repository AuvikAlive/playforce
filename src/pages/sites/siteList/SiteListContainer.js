import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { SiteList } from './SiteList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'
import { fetchSitesRealTime } from '../../../store/actions/actionCreators/siteListActions'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
  searchBar: { open, query },
  siteList: { sitesLoaded, sites },
}) => ({
  userId: uid,
  searchBarOpen: open,
  query,
  sitesLoaded,
  sites,
})

const mapDispatchToProps = { openSearchBar, closeSearchBar, fetchSitesRealTime }

export const SiteListContainer = compose(
  withRouter,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(SiteList)
