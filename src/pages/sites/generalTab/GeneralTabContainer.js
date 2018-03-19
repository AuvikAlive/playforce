import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = (
  { firestore: { data: { users } }, firebase: { auth: { uid } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  siteId: id,
  site: users && users[uid].sites && users[uid].sites[id],
})

export const GeneralTabContainer = compose(
  withRouter,
  withFirestore,
  connect(mapStateToProps),
)(GeneralTab)
