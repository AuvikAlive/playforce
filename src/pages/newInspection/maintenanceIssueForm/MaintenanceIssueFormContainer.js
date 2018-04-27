import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import { withFullscreenDialog } from '../../../hocs/withFullscreenDialog/withFullscreenDialog'
import { MaintenanceIssueForm } from './MaintenanceIssueForm'

const mapStateToProps = ({
  firestore: {
    data: { users },
  },
  firebase: {
    auth: { uid },
  },
  inspection: { equipments },
}) => ({
  userId: uid,
  equipments,
})

export const MaintenanceIssueFormContainer = compose(
  withFullscreenDialog,
  withImageCapture,
  withFeedback,
  connect(mapStateToProps)
)(MaintenanceIssueForm)
