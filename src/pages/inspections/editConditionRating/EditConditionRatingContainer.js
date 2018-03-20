import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditConditionRating } from './EditConditionRating'
import {
  editConditionRating,
  deleteConditionRating,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'

const mapStateToProps = (
  {
    firestore: { data: { users } },
    firebase: { auth: { uid } },
    inspection: { conditionRatings },
  },
  { match: { params: { id } } },
) => ({
  conditionRatingIndex: id,
  conditionRating: conditionRatings[id],
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { editConditionRating, deleteConditionRating }

export const EditConditionRatingContainer = compose(
  withImageCapture,
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(EditConditionRating)
