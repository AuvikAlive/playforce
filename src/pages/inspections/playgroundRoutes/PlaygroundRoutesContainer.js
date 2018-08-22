import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchPlaygroundsRealTime,
  fetchPlaygrounds,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundRoutes } from './PlaygroundRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, playgroundsLoaded },
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
  playgroundsLoaded,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchPlaygroundsRealTime,
  fetchPlaygrounds,
}

export const PlaygroundRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlaygroundRoutes)
