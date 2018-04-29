import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  saveMaintenanceIssue,
  deleteMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { EditMaintenanceIssue } from './EditMaintenanceIssue'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, maintenanceIssues },
  },
  { match }
) => ({
  userId: uid,
  inspectionId: id,
  maintenanceIssueId: match.params.id,
  maintenanceIssue: maintenanceIssues.find(item => item.id === match.params.id),
})

const mapDispatchToProps = { saveMaintenanceIssue, deleteMaintenanceIssue }

export const EditMaintenanceIssueContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(EditMaintenanceIssue)
