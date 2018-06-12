import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchImpactTestsRealTime,
  fetchImpactTests,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ImpactTestRoutes } from './ImpactTestRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, impactTestsLoaded },
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
  impactTestsLoaded,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchImpactTestsRealTime,
  fetchImpactTests,
}

export const ImpactTestRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ImpactTestRoutes)
