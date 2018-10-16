import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditConditionRating } from './EditConditionRating'

const mapStateToProps = (
  { firebase, inspection },
  { match, conditionRatings }
) => {
  const conditionRatingId = match.params.id

  return {
    userId: firebase.auth.uid,
    inspectionId: inspection.id,
    conditionRatingId,
    conditionRating: conditionRatings.find(
      item => item.id === conditionRatingId
    ),
  }
}

const enhance = compose(
  withFeedback,
  withDialog,
  connect(mapStateToProps)
)

export const EditConditionRatingContainer = enhance(EditConditionRating)
