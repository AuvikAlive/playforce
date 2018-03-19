import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddConditionRating } from './AddConditionRating'
import { addConditionRating } from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

const mapStateToProps = ({
  firestore: { data: { users } },
  firebase: { auth: { uid } },
  inspection: { cover },
}) => ({
  cover,
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { addConditionRating }

export const AddConditionRatingContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(AddConditionRating)
