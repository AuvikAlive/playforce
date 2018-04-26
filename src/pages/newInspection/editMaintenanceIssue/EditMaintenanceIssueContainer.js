import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditMaintenanceIssue } from './EditMaintenanceIssue'
import {
  editMaintenanceIssue,
  deleteMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = (
  { inspection: { maintenanceIssues, equipments } },
  {
    match: {
      params: { id },
    },
  }
) => ({
  maintenanceIssueIndex: id,
  maintenanceIssue: maintenanceIssues[id],
  equipments,
})

const mapDispatchToProps = { editMaintenanceIssue, deleteMaintenanceIssue }

export const EditMaintenanceIssueContainer = compose(
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(EditMaintenanceIssue)
