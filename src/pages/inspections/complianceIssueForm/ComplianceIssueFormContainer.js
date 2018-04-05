import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { ComplianceIssueForm } from './ComplianceIssueForm'
import { fetchCommonIssues } from '../../../store/actions/actionCreators/commonIssueActions'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
  inspection: { equipments },
  commonIssue: { commonIssuesLoaded, commonIssues },
}) => ({
  userId: uid,
  equipments,
  commonIssuesLoaded,
  commonIssues,
})

const mapDispatchToProps = { fetchCommonIssues }

export const ComplianceIssueFormContainer = compose(
  withImageCapture,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(ComplianceIssueForm)
