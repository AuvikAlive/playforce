import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddConditionRating } from './AddConditionRating'
import { addConditionRating } from '../../../store/actions/actionCreators/inspectionActions/'

const mapDispatchToProps = { addConditionRating }

export const AddConditionRatingContainer = compose(
  connect(null, mapDispatchToProps)
)(AddConditionRating)
