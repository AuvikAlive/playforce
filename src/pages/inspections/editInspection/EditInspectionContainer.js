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
} from '../../../store/actions/actionCreators/inspectionActions/'
import { fetchStandards } from '../../../store/actions/actionCreators/standardActions'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

const mapStateToProps = ({ firebase, inspection, standard }, { match }) => {
  const { auth, profile } = firebase
  const { displayName, email, defaultCertificateText, signature } = profile
  const { standardsLoaded, standards } = standard

  return {
    userId: auth.uid,
    inspectionId: match.params.id,
    inspection,
    displayName,
    email,
    defaultCertificateText,
    signature,
    standardsLoaded,
    standards,
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
  deleteInspection,
  discardInspection,
  toggleInspectionCertificate,
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
