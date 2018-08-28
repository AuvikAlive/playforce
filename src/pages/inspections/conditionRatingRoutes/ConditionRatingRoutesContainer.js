import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
  fetchConditionRatings,
  addConditionRating,
  updateConditionRating,
  deleteConditionRating,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ConditionRatingRoutes } from './ConditionRatingRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const {
    inspectionLoaded,
    conditionRatingsLoaded,
    conditionRatings,
  } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    conditionRatingsLoaded,
    conditionRatings,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
  fetchConditionRatings,
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
