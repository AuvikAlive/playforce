import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuditSummary } from './AuditSummary'
import { addInspectionSummary } from '../../../store/actions/actionCreators/inspectionActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'

const mapStateToProps = ({
  firebase: { profile },
  inspection: { auditSummary },
}) => ({ profile, auditSummary })

const mapDispatchToProps = { addInspectionSummary }

export const AuditSummaryContainer = compose(
  withFeedback,
  connect(mapStateToProps, mapDispatchToProps)
)(AuditSummary)
