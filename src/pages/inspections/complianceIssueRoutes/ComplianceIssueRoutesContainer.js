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

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, complianceIssuesLoaded, complianceIssues },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  inspectionId: id,
  inspectionLoaded,
  complianceIssuesLoaded,
  complianceIssues,
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchComplianceIssues,
  fetchComplianceIssuesRealTime,
  addComplianceIssue,
  updateComplianceIssue,
  deleteComplianceIssue,
}

export const ComplianceIssueRoutesContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ComplianceIssueRoutes)
