import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  saveImpactGeneralInfo,
  deleteImpactTest,
  addSurfaceTest,
  deleteSurfaceTest,
  updateSurfaceTest,
  saveImpactComment,
  addDropTest,
  updateDropTest,
  deleteDropTest,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { ImpactTestRoutes } from './ImpactTestRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, impactTests, impactGeneralInfo } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    impactTests,
    impactGeneralInfo,
  }
}

const mapDispatchToProps = {
  saveImpactGeneralInfo,
  deleteImpactTest,
  addSurfaceTest,
  deleteSurfaceTest,
  updateSurfaceTest,
  saveImpactComment,
  addDropTest,
  updateDropTest,
  deleteDropTest,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ImpactTestRoutesContainer = enhance(ImpactTestRoutes)
