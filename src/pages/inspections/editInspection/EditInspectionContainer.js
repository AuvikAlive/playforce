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
  fetchImpactTests,
  fetchPlayingSufacesRealTime,
  fetchPlaygroundsRealTime,
  fetchPlaygrounds,
  toggleInspectionCertificate,
  toggleInspectionComplete,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { fetchReportNotesRealTime } from '../../../store/actions/actionCreators/reportNoteActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = (
  { firebase, inspection, standard, reportNote },
  { match }
) => {
  const { auth, profile } = firebase
  const {
    displayName,
    email,
    defaultCertificateText,
    signature,
    inspectionCount,
    inspectionCompleteCount,
  } = profile
  const { standardsLoaded, standards } = standard
  const { reportNotesLoaded, reportNotes } = reportNote

  return {
    userId: auth.uid,
    inspectionId: match.params.id,
    inspection,
    displayName,
    email,
    defaultCertificateText,
    signature,
    inspectionCount,
    inspectionCompleteCount,
    standardsLoaded,
    standards,
    reportNotesLoaded,
    reportNotes,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchConditionRatingsRealTime,
  fetchConditionRatings,
  fetchComplianceIssuesRealTime,
  fetchComplianceIssues,
  fetchMaintenanceIssuesRealTime,
  fetchMaintenanceIssues,
  fetchImpactTests,
  fetchPlayingSufacesRealTime,
  fetchPlaygroundsRealTime,
  fetchPlaygrounds,
  fetchStandards,
  fetchReportNotesRealTime,
  deleteInspection,
  discardInspection,
  toggleInspectionCertificate,
  toggleInspectionComplete,
}

const enhance = compose(
  withDeleteDialog,
  withFeedback,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditInspectionContainer = enhance(EditInspection)
