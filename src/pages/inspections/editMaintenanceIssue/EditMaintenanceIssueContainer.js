import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditMaintenanceIssue } from './EditMaintenanceIssue'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id },
  },
  { match, maintenanceIssues }
) => ({
  userId: uid,
  inspectionId: id,
  maintenanceIssueId: match.params.id,
  maintenanceIssue: maintenanceIssues.find(item => item.id === match.params.id),
})

export const EditMaintenanceIssueContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(mapStateToProps)
)(EditMaintenanceIssue)
