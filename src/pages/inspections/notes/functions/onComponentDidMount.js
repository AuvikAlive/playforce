import { onComponentDidMountWithTitleLeftNav } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context

  const {
    inspectionLoaded,
    fetchInspectionRealTime,
    userId,
    inspectionId,
    notes,
  } = component.props

  const title = 'Notes'

  onComponentDidMountWithTitleLeftNav(component, title)

  notes && component.setState({ notes })

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
}
