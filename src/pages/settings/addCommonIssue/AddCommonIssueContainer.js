import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { AddCommonIssue } from './AddCommonIssue'

const mapStateToProps = ({ firebase: { auth: { uid } } }) => ({
  userId: uid,
})

export const AddCommonIssueContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(AddCommonIssue)
