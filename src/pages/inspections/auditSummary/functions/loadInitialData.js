import isEmpty from 'lodash/isEmpty'
import { makeDefaultSummary } from './makeDefaultSummary'

export const loadInitialData = (component, auditSummary, cover) => {
  const {
    profile: { standardAuditSummary },
  } = component.props

  isEmpty(auditSummary)
    ? component.setState({
        summary: standardAuditSummary || makeDefaultSummary(cover),
      })
    : component.setState({ ...auditSummary })
}
