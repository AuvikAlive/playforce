import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddComplianceIssue } from './AddComplianceIssue'
import { addComplianceIssue } from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
}) => ({
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { addComplianceIssue }

export const AddComplianceIssueContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(AddComplianceIssue)
