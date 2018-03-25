import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { SiteList } from './SiteList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
  searchBar: { open, query },
}) => ({
  sites: users && users[uid].sites,
  userId: uid,
  searchBarOpen: open,
  query,
})

const mapDispatchToProps = { openSearchBar, closeSearchBar }

export const SiteListContainer = compose(
  withRouter,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(SiteList)
