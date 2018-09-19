import { onComponentDidMountWithTitle } from '../../functions/'

export const onComponentDidMount = async component => {
  const { userId, userGroupsLoaded, fetchUserGroupsRealTime } = component.props
  const { addUnsubscriber } = component.context

  onComponentDidMountWithTitle(component, 'Dashboard')

  !userGroupsLoaded && addUnsubscriber(await fetchUserGroupsRealTime(userId))
}
