import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addPlaygroundPlayingSurface,
  updatePlaygroundPlayingSurface,
  deletePlaygroundPlayingSurface,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundPlayingSurfaceRoutes } from './PlaygroundPlayingSurfaceRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, playgrounds },
  },
  { playgroundId }
) => ({
  userId: uid,
  inspectionId: id,
  playgrounds,
  playground: playgrounds.find(({ id }) => id === playgroundId),
})

const mapDispatchToProps = {
  addPlaygroundPlayingSurface,
  updatePlaygroundPlayingSurface,
  deletePlaygroundPlayingSurface,
}

export const PlaygroundPlayingSurfaceRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlaygroundPlayingSurfaceRoutes)
