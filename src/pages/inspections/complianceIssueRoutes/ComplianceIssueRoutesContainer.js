import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchComplianceIssues,
  fetchComplianceIssuesRealTime,
  addComplianceIssue,
  updateComplianceIssue,
  deleteComplianceIssue,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ComplianceIssueRoutes } from './ComplianceIssueRoutes'

const mapStateToProps = ({ firebase, inspection }, { match }) => {
  const {
    inspectionLoaded,
    complianceIssuesLoaded,
    complianceIssues,
  } = inspection

  return {
    userId: firebase.auth.uid,
    inspectionId: match.params.id,
    inspectionLoaded,
    complianceIssuesLoaded,
    complianceIssues,
  }
}

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchComplianceIssues,
  fetchComplianceIssuesRealTime,
  addComplianceIssue,
  updateComplianceIssue,
  deleteComplianceIssue,
}

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ComplianceIssueRoutesContainer = enhance(ComplianceIssueRoutes)
