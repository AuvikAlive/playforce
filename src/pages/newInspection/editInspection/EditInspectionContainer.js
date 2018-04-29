import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditInspection } from './EditInspection'
import {
  fetchInspectionRealTime,
  deleteInspection,
  discardInspection,
  fetchConditionRatingsRealTime,
  fetchComplianceIssuesRealTime,
  fetchMaintenanceIssuesRealTime,
} from '../../../store/actions/actionCreators/newInspectionActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
      profile: { displayName },
    },
    firestore: {
      data: { users },
    },
    inspection,
    standard: { standardsLoaded, standards },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspection,
  displayName,
  standardsLoaded,
  standards,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
  fetchComplianceIssuesRealTime,
  fetchMaintenanceIssuesRealTime,
  fetchStandards,
  deleteInspection,
  discardInspection,
}

export const EditInspectionContainer = compose(
  withDeleteModal,
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(EditInspection)
