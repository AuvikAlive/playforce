import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { ComplianceIssueForm } from './ComplianceIssueForm'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
  inspection: { equipments },
}) => ({
  userId: uid,
  data: users && users[uid],
  equipments,
})

export const ComplianceIssueFormContainer = compose(
  withImageCapture,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(ComplianceIssueForm)
