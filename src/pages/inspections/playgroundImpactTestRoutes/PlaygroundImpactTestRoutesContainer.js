import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  savePlaygroundImpactGeneralInfo,
  deletePlaygroundImpactTest,
  addPlaygroundSurfaceTest,
  updatePlaygroundSurfaceTest,
  deletePlaygroundSurfaceTest,
  addPlaygroundDropTest,
  updatePlaygroundDropTest,
  deletePlaygroundDropTest,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundImpactTestRoutes } from './PlaygroundImpactTestRoutes'

const mapStateToProps = ({ firebase, inspection }, { playgroundId }) => {
  const { id, playgrounds } = inspection
  const playground = playgrounds.find(({ id }) => id === playgroundId)

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    playgrounds,
    playgroundId,
    playground,
    impactTests: playground.impactTests,
  }
}

const mapDispatchToProps = {
  savePlaygroundImpactGeneralInfo,
  deletePlaygroundImpactTest,
  addPlaygroundSurfaceTest,
  updatePlaygroundSurfaceTest,
  deletePlaygroundSurfaceTest,
  addPlaygroundDropTest,
  updatePlaygroundDropTest,
  deletePlaygroundDropTest,
}

const enhance = compose(
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlaygroundImpactTestRoutesContainer = enhance(
  PlaygroundImpactTestRoutes
)
