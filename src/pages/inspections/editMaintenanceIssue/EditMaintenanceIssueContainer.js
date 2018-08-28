import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { EditMaintenanceIssue } from './EditMaintenanceIssue'

const mapStateToProps = (
  { firebase, inspection },
  { match, maintenanceIssues }
) => {
  const maintenanceIssueId = match.params.id

  return {
    userId: firebase.auth.uid,
    inspectionId: inspection.id,
    maintenanceIssueId,
    maintenanceIssue: maintenanceIssues.find(
      item => item.id === maintenanceIssueId
    ),
  }
}

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(mapStateToProps)
)

export const EditMaintenanceIssueContainer = enhance(EditMaintenanceIssue)
