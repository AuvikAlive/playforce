import isEmpty from 'lodash/isEmpty'
import { replacePlaceholders } from './replacePlaceholders'
import { makeDefaultSummary } from './makeDefaultSummary'

export const loadInitialData = (component, auditSummary, cover) => {
  const { standardAuditSummary } = component.props
  const { location } = cover
  const { name, street, suburb, state, postcode, country } = location
  const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

  isEmpty(auditSummary)
    ? component.setState({
        summary: standardAuditSummary
          ? replacePlaceholders(standardAuditSummary, name, address)
          : makeDefaultSummary(name, address),
      })
    : component.setState({ ...auditSummary })
}
