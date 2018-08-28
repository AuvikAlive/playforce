import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchPlayingSufacesRealTime,
  addPlayingSurface,
  updatePlayingSurface,
  deletePlayingSurface,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlayingSurfaceRoutes } from './PlayingSurfaceRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const {
    inspectionLoaded,
    playingSurfacesLoaded,
    playingSurfaces,
  } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    playingSurfacesLoaded,
    playingSurfaces,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchPlayingSufacesRealTime,
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
