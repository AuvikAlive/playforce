import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addConditionRating,
  updateConditionRating,
  deleteConditionRating,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ConditionRatingRoutes } from './ConditionRatingRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, conditionRatings } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    conditionRatings,
  }
}

const mapDispatchToProps = {
  addConditionRating,
  updateConditionRating,
  deleteConditionRating,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ConditionRatingRoutesContainer = enhance(ConditionRatingRoutes)
