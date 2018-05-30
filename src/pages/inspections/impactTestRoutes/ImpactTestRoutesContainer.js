import { connect } from 'react-redux'
import { compose } from 'redux'
import { fetchInspectionRealTime } from '../../../store/actions/actionCreators/inspectionActions/'
import { ImpactTestRoutes } from './ImpactTestRoutes'

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
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
}

export const ImpactTestRoutesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ImpactTestRoutes)
