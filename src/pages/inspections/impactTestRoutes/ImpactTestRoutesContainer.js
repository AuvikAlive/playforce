import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchImpactTestsRealTime,
  fetchImpactTests,
  saveImpactGeneralInfo,
  deleteImpactTest,
  addSurfaceTest,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { ImpactTestRoutes } from './ImpactTestRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const {
    inspectionLoaded,
    impactTestsLoaded,
    impactTests,
    impactGeneralInfo,
  } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    impactTestsLoaded,
    impactTests,
    impactGeneralInfo,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchImpactTestsRealTime,
  fetchImpactTests,
  saveImpactGeneralInfo,
  deleteImpactTest,
  addSurfaceTest,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ImpactTestRoutesContainer = enhance(ImpactTestRoutes)
