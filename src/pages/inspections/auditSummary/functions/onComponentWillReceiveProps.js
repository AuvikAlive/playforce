import isEmpty from 'lodash/isEmpty'
import { loadInitialData } from './loadInitialData'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { inspectionLoaded, auditSummary, cover } = nextProps

  inspectionLoaded &&
    (isEmpty(auditSummary) || auditSummary !== component.props.auditSummary) &&
    cover !== component.props.cover &&
    loadInitialData(component, auditSummary, cover)
}
