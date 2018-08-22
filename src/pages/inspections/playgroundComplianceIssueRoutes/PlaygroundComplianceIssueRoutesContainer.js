import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlaygroundComplianceIssueRoutes } from './PlaygroundComplianceIssueRoutes'
import {
  addPlaygroundComplianceIssue,
  updatePlaygroundComplianceIssue,
  deletePlaygroundComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'

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
  addPlaygroundComplianceIssue,
  updatePlaygroundComplianceIssue,
  deletePlaygroundComplianceIssue,
}

export const PlaygroundComplianceIssueRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(PlaygroundComplianceIssueRoutes)
