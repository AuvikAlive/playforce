import isEmpty from 'lodash/isEmpty'
import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = this.context
  const title = 'Audit Summary'
  const {
    inspectionLoaded,
    fetchInspectionRealTime,
    auditSummary,
    cover,
    userId,
    inspectionId,
  } = this.props

  onComponentDidMountWithTitleLeftNav(component, title)

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
  !isEmpty(cover) && this.loadInitialData(auditSummary, cover)
}
