import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchPlaygroundsRealTime,
  fetchPlaygrounds,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundRoutes } from './PlaygroundRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const { inspectionLoaded, playgroundsLoaded } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    playgroundsLoaded,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchPlaygroundsRealTime,
  fetchPlaygrounds,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlaygroundRoutesContainer = enhance(PlaygroundRoutes)
