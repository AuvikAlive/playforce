import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  addPlaygroundMaintenanceIssue,
  updatePlaygroundMaintenanceIssue,
  deletePlaygroundMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { PlaygroundMaintenanceIssueRoutes } from './PlaygroundMaintenanceIssueRoutes'

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
  addPlaygroundMaintenanceIssue,
  updatePlaygroundMaintenanceIssue,
  deletePlaygroundMaintenanceIssue,
}

export const PlaygroundMaintenanceIssueRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlaygroundMaintenanceIssueRoutes)
