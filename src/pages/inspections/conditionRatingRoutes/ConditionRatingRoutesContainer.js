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

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, conditionRatingsLoaded, conditionRatings },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
  conditionRatingsLoaded,
  conditionRatings,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
  fetchConditionRatings,
  addConditionRating,
  updateConditionRating,
  deleteConditionRating,
}

export const ConditionRatingRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ConditionRatingRoutes)
