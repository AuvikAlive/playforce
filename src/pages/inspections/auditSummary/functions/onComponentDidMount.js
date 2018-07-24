import isEmpty from 'lodash/isEmpty'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'
import { loadInitialData } from './loadInitialData'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context

  const {
    inspectionLoaded,
    fetchInspectionRealTime,
    auditSummary,
    cover,
    userId,
    inspectionId,
  } = component.props

  const title = 'Audit Summary'

  onComponentDidMountWithTitleLeftNav(component, title)

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))

  !isEmpty(cover) && loadInitialData(component, auditSummary, cover)
}
