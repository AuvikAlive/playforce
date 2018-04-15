import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuditSummary } from './AuditSummary'
import { addInspectionSummary } from '../../../store/actions/actionCreators/inspectionActions/'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'

const mapStateToProps = ({
  firebase: { profile },
  inspection: { auditSummary },
}) => ({ profile, auditSummary })

const mapDispatchToProps = { addInspectionSummary }

export const AuditSummaryContainer = compose(
  withErrorLoadingSubmit,
  connect(mapStateToProps, mapDispatchToProps)
)(AuditSummary)
