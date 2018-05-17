import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  fetchInspectionRealTime,
  fetchComplianceIssues,
  fetchComplianceIssuesRealTime,
} from '../../../store/actions/actionCreators/inspectionActions/'
import { ComplianceIssueRoutes } from './ComplianceIssueRoutes'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    inspection: { inspectionLoaded, complianceIssuesLoaded },
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
})

const mapDispatchToProps = {
  fetchInspectionRealTime,
  fetchComplianceIssues,
  fetchComplianceIssuesRealTime,
}

export const ComplianceIssueRoutesContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(ComplianceIssueRoutes)
