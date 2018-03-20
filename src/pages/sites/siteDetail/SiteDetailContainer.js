import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { SiteDetail } from './SiteDetail'

const mapStateToProps = (
  { firestore: { data: { users } }, firebase: { auth: { uid } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  id,
  site: users && users[uid].sites && users[uid].sites[id],
})

export const SiteDetailContainer = compose(
  withDeleteModal,
  withRouter,
  withFirestore,
  connect(mapStateToProps),
)(SiteDetail)
