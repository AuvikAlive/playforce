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

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, playingSurfacesLoaded, playingSurfaces },
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
  playingSurfacesLoaded,
  playingSurfaces,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchPlayingSufacesRealTime,
  addPlayingSurface,
  updatePlayingSurface,
  deletePlayingSurface,
}

export const PlayingSurfaceRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlayingSurfaceRoutes)
