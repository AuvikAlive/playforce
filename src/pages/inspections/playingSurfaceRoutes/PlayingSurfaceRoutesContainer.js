import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addPlayingSurface,
  updatePlayingSurface,
  deletePlayingSurface,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlayingSurfaceRoutes } from './PlayingSurfaceRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { id, playingSurfaces } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: id,
    playingSurfaces,
  }
}

const mapDispatchToProps = {
  addPlayingSurface,
  updatePlayingSurface,
  deletePlayingSurface,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlayingSurfaceRoutesContainer = enhance(PlayingSurfaceRoutes)
