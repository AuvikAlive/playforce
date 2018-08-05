import { onComponentDidMountWithTitleLeftNav } from '../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context

  const {
    inspectionLoaded,
    fetchInspectionRealTime,
    userId,
    inspectionId,
  } = component.props

  const title = 'Custom Certificate Text'

  onComponentDidMountWithTitleLeftNav(component, title)

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
}
