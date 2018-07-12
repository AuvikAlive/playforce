import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = component => {
  const { standardAuditSummary } = component.props
  const title = 'Standard Audit Summary'

  onComponentDidMountWithTitleLeftNav(component, title)

  standardAuditSummary && component.setState({ standardAuditSummary })
}
