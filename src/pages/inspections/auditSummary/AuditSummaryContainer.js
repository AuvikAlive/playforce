import { connect } from 'react-redux'
import { compose } from 'redux'
import { AuditSummary } from './AuditSummary'

export const AuditSummaryContainer = compose(
  connect(({ firebase: { profile } }) => ({ profile })),
)(AuditSummary)
