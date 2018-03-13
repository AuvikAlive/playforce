import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuditSummary } from './AuditSummary'
import { addInspectionSummary } from '../../../store/actions/actionCreators/inspectionActions'

const mapStateToProps = ({
  firebase: { profile },
  inspection: { auditSummary },
}) => ({ profile, auditSummary })

const mapDispatchToProps = { addInspectionSummary }

export const AuditSummaryContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(AuditSummary)
