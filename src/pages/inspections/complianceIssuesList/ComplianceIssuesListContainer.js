import { connect } from 'react-redux'
import { compose } from 'redux'
import { ComplianceIssuesList } from './ComplianceIssuesList'

const mapStateToProps = ({ inspection: { complianceIssues } }) => ({
  complianceIssues,
})

export const ComplianceIssuesListContainer = compose(connect(mapStateToProps))(
  ComplianceIssuesList,
)
