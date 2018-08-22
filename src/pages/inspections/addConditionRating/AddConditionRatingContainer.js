import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { AddConditionRating } from './AddConditionRating'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  inspection: { id, equipments },
}) => ({
  userId: uid,
  inspectionId: id,
  equipments,
})

export const AddConditionRatingContainer = compose(
  withFeedback,
  connect(mapStateToProps)
)(AddConditionRating)
