import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditConditionRating } from './EditConditionRating'
import {
  editConditionRating,
  deleteConditionRating,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = (
  { inspection: { conditionRatings } },
  { match: { params: { id } } },
) => ({
  conditionRatingIndex: id,
  conditionRating: conditionRatings[id],
})

const mapDispatchToProps = { editConditionRating, deleteConditionRating }

export const EditConditionRatingContainer = compose(
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps),
)(EditConditionRating)
