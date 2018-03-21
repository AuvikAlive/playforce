import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditMaintenanceIssue } from './EditMaintenanceIssue'
import {
  editMaintenanceIssue,
  deleteMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'

const mapStateToProps = (
  {
    firestore: { data: { users } },
    firebase: { auth: { uid } },
    inspection: { maintenanceIssues, equipments },
  },
  { match: { params: { id } } },
) => ({
  maintenanceIssueIndex: id,
  maintenanceIssue: maintenanceIssues[id],
  equipments,
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { editMaintenanceIssue, deleteMaintenanceIssue }

export const EditMaintenanceIssueContainer = compose(
  withImageCapture,
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(EditMaintenanceIssue)
