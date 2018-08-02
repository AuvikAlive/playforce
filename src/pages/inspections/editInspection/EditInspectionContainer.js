import { connect } from 'react-redux'
import { compose } from 'redux'
import { EditInspection } from './EditInspection'
import {
  fetchInspectionRealTime,
  deleteInspection,
  discardInspection,
  fetchConditionRatingsRealTime,
  fetchConditionRatings,
  fetchComplianceIssuesRealTime,
  fetchComplianceIssues,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
  fetchImpactTestsRealTime,
  toggleInspectionCertificate,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
      profile: { displayName, email, defaultCertificateText },
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
  email,
  defaultCertificateText,
  standardsLoaded,
  standards,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
  fetchConditionRatings,
  fetchComplianceIssuesRealTime,
  fetchComplianceIssues,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
  fetchImpactTestsRealTime,
  fetchStandards,
  deleteInspection,
  discardInspection,
  toggleInspectionCertificate,
}

export const EditInspectionContainer = compose(
  withDeleteDialog,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditInspection)
