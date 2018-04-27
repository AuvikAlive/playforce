import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  editMaintenanceIssue,
  deleteMaintenanceIssue,
} from '../../../store/actions/actionCreators/newInspectionActions/'
import { EditMaintenanceIssue } from './EditMaintenanceIssue'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { id, maintenanceIssues, equipments },
  },
  { match }
) => ({
  userId: uid,
  inspectionId: id,
  maintenanceIssueId: match.params.id,
  maintenanceIssue: maintenanceIssues.find(item => item.id === match.params.id),
  equipments,
})

const mapDispatchToProps = { editMaintenanceIssue, deleteMaintenanceIssue }

export const EditMaintenanceIssueContainer = compose(
  withFeedback,
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(EditMaintenanceIssue)
