import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  deleteSurfaceTest,
  updateImpactSurface,
  addDropTest,
  updateDropTest,
  deleteDropTest,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ImpactTestDetailRoutes } from './ImpactTestDetailRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, impactTests } = inspection
  const impactTestId = match.params.id

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    impactTests,
    impactTestId,
    impactTest: impactTests.find(item => item.id === impactTestId),
  }
}

const mapDispatchToProps = {
  deleteSurfaceTest,
  updateImpactSurface,
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

export const ImpactTestDetailRoutesContainer = enhance(ImpactTestDetailRoutes)
