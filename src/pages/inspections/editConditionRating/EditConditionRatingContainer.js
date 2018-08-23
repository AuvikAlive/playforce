import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditConditionRating } from './EditConditionRating'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id },
  },
  { match, conditionRatings }
) => ({
  userId: uid,
  inspectionId: id,
  conditionRatingId: match.params.id,
  conditionRating: conditionRatings.find(item => item.id === match.params.id),
})

export const EditConditionRatingContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(mapStateToProps)
)(EditConditionRating)
