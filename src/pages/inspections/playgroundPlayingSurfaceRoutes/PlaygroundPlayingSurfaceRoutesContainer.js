import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addPlaygroundPlayingSurface,
  updatePlaygroundPlayingSurface,
  deletePlaygroundPlayingSurface,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundPlayingSurfaceRoutes } from './PlaygroundPlayingSurfaceRoutes'

const mapStateToProps = ({ firebase, inspection }, { playgroundId }) => {
  const { id, playgrounds } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    playgrounds,
    playground: playgrounds.find(({ id }) => id === playgroundId),
  }
}

const mapDispatchToProps = {
  addPlaygroundPlayingSurface,
  updatePlaygroundPlayingSurface,
  deletePlaygroundPlayingSurface,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlaygroundPlayingSurfaceRoutesContainer = enhance(
  PlaygroundPlayingSurfaceRoutes
)
