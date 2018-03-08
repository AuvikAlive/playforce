import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore, firestoreConnect } from 'react-redux-firebase'
import { SiteList } from './SiteList'
import {
  openSearchBar,
  closeSearchBar,
} from '../../../store/actions/actionCreators/searchBarActions'

const mapStateToProps = ({
  firestore: { ordered: { sites } },
  firebase: { profile: { email } },
}) => ({
  sites,
  email,
})

const mapDispatchToProps = { openSearchBar, closeSearchBar }

export const SiteListContainer = compose(
  withRouter,
  withFirestore,
  firestoreConnect(({ email }) => {
    return [
      {
        collection: 'sites',
        orderBy: 'name',
        // where: ['addedUser', '==', email],
      },
    ]
  }),
  connect(mapStateToProps, mapDispatchToProps),
)(SiteList)
