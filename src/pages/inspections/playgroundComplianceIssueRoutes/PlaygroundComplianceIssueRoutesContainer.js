import { connect } from 'react-redux'
import { compose } from 'redux'
import { PlaygroundComplianceIssueRoutes } from './PlaygroundComplianceIssueRoutes'
import {
  addPlaygroundComplianceIssue,
  updatePlaygroundComplianceIssue,
  deletePlaygroundComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'

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
  addPlaygroundComplianceIssue,
  updatePlaygroundComplianceIssue,
  deletePlaygroundComplianceIssue,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const PlaygroundComplianceIssueRoutesContainer = enhance(
  PlaygroundComplianceIssueRoutes
)
