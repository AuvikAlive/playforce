import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context

  const {
    userId,
    inspectionTypesLoaded,
    fetchInspectionTypesRealTime,
  } = component.props

  const title = 'Inspection Types'

  onComponentDidMountWithTitleLeftNav(component, title)

  !inspectionTypesLoaded &&
    addUnsubscriber(await fetchInspectionTypesRealTime(userId))
}
