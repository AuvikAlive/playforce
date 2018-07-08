import { onComponentDidMountWithTitleLeftNav } from '../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context
  const { userId, standardsLoaded, fetchStandardsRealTime } = component.props
  const title = 'Standards'

  onComponentDidMountWithTitleLeftNav(component, title)

  !standardsLoaded && addUnsubscriber(await fetchStandardsRealTime(userId))
}
