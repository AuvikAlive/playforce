import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddConditionRating } from './AddConditionRating'

const mapStateToProps = ({ firebase, inspection }) => {
  const { id, equipments } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    equipments,
  }
}

const enhance = compose(
  withFeedback,
  connect(mapStateToProps)
)

export const AddConditionRatingContainer = enhance(AddConditionRating)
