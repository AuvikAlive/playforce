import { connect } from 'react-redux'
import { compose } from 'redux'
import { AddComplianceIssue } from './AddComplianceIssue'
import { addComplianceIssue } from '../../../store/actions/actionCreators/inspectionActions'

const mapDispatchToProps = { addComplianceIssue }

export const AddComplianceIssueContainer = compose(
  connect(null, mapDispatchToProps),
)(AddComplianceIssue)
