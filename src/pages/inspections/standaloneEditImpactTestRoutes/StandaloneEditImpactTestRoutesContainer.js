import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchStandaloneImpactTestRealTime,
  saveImpactGeneralInfo,
  deleteStandaloneImpactTest,
  addSurfaceTest,
  deleteSurfaceTest,
  updateSurfaceTest,
  saveImpactComment,
  addDropTest,
  updateDropTest,
  deleteDropTest,
  discardInspection,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions/'
import { StandaloneEditImpactTestRoutes } from './StandaloneEditImpactTestRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { inspectionLoaded, impactTests, impactGeneralInfo } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    impactTests,
    impactGeneralInfo,
  }
}

const mapDispatchToProps = {
  fetchStandaloneImpactTestRealTime,
  saveImpactGeneralInfo,
  deleteStandaloneImpactTest,
  addSurfaceTest,
  deleteSurfaceTest,
  updateSurfaceTest,
  saveImpactComment,
  addDropTest,
  updateDropTest,
  deleteDropTest,
  discardInspection,
  fetchStandards,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const StandaloneEditImpactTestRoutesContainer = enhance(
  StandaloneEditImpactTestRoutes
)
