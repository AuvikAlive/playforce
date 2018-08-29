import { onComponentDidMountWithTitleLeftNav } from '../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber } = component.context
  const { userId, standardsLoaded, fetchStandardsRealTime } = component.props

  onComponentDidMountWithTitleLeftNav(component, 'Standards')

  !standardsLoaded && addUnsubscriber(await fetchStandardsRealTime(userId))
}
