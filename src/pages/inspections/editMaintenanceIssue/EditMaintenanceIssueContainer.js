import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { EditMaintenanceIssue } from './EditMaintenanceIssue'
import {
  editMaintenanceIssue,
  deleteMaintenanceIssue,
} from '../../../store/actions/actionCreators/inspectionActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

const mapStateToProps = (
  {
    firestore: { data: { users } },
    firebase: { auth: { uid } },
    inspection: { maintenanceIssues },
  },
  { match: { params: { id } } },
) => ({
  maintenanceIssueIndex: id,
  maintenanceIssue: maintenanceIssues[id],
  userId: uid,
  data: users && users[uid],
})

const mapDispatchToProps = { editMaintenanceIssue, deleteMaintenanceIssue }

export const EditMaintenanceIssueContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(EditMaintenanceIssue)
