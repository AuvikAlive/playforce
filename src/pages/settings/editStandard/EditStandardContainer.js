import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
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
  withDeleteModal,
  withFirestore,
  connect(mapStateToProps),
)(EditStandard)
