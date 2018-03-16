import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditStandard } from './EditStandard'

const mapStateToProps = (
  { firebase: { auth: { uid } }, firestore: { ordered: { users } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  standardId: id,
  standard: users && users[0],
})

export const EditStandardContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(EditStandard)
