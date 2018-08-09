import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlayingSurfaceList } from './PlayingSurfaceList'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, playingSurfacesAdded, playingSurfaces },
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
  playingSurfacesAdded,
  playingSurfaces,
})

export const PlayingSurfaceListContainer = compose(connect(mapStateToProps))(
  PlayingSurfaceList
)
