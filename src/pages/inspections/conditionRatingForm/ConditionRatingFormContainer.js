import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { ConditionRatingForm } from './ConditionRatingForm'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
}) => ({
  userId: uid,
  data: users && users[uid],
})

export const ConditionRatingFormContainer = compose(
  withImageCapture,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(ConditionRatingForm)
