import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { addConditionRating } from '../../../store/actions/actionCreators/newInspectionActions/'
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

const mapDispatchToProps = { addConditionRating }

export const AddConditionRatingContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AddConditionRating)
