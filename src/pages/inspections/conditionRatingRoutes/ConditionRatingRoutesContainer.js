import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ConditionRatingRoutes } from './ConditionRatingRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, conditionRatingsLoaded },
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
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
}

export const ConditionRatingRoutesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ConditionRatingRoutes)
