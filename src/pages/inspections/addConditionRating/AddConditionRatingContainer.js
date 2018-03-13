import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddConditionRating } from './AddConditionRating'
import { addInspectionCover } from '../../../store/actions/actionCreators/inspectionActions'

const mapDispatchToProps = { addInspectionCover }

export const AddConditionRatingContainer = compose(
  connect(null, mapDispatchToProps),
)(AddConditionRating)
