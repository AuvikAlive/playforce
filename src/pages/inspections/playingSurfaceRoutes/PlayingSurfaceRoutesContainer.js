import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchPlayingSufacesRealTime,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlayingSurfaceRoutes } from './PlayingSurfaceRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, playingSurfacesLoaded },
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
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchPlayingSufacesRealTime,
}

export const PlayingSurfaceRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlayingSurfaceRoutes)
