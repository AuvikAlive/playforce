import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddInspection } from './AddInspection'

const mapStateToProps = (
  { firestore: { data: { users } }, firebase: { auth: { uid } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  siteId: id,
})

export const AddInspectionContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(AddInspection)
