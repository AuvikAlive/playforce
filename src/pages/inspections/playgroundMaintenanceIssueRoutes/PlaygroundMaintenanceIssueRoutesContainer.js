import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addPlaygroundMaintenanceIssue,
  updatePlaygroundMaintenanceIssue,
  deletePlaygroundMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundMaintenanceIssueRoutes } from './PlaygroundMaintenanceIssueRoutes'

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
  addPlaygroundMaintenanceIssue,
  updatePlaygroundMaintenanceIssue,
  deletePlaygroundMaintenanceIssue,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlaygroundMaintenanceIssueRoutesContainer = enhance(
  PlaygroundMaintenanceIssueRoutes
)
