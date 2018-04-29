import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  saveConditionRating,
  deleteConditionRating,
} from '../../../store/actions/actionCreators/newInspectionActions/'
import { EditConditionRating } from './EditConditionRating'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, conditionRatings },
  },
  { match }
) => ({
  userId: uid,
  inspectionId: id,
  conditionRatingId: match.params.id,
  conditionRating: conditionRatings.find(item => item.id === match.params.id),
})

const mapDispatchToProps = { saveConditionRating, deleteConditionRating }

export const EditConditionRatingContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(EditConditionRating)
