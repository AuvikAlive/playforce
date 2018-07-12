export const onComponentDidMount = async component => {
  const { setNavTitle, addUnsubscriber } = component.context
  const { groupsLoaded, fetchGroupsRealTime } = component.props

  setNavTitle('Manage Groups')

  !groupsLoaded && addUnsubscriber(await fetchGroupsRealTime())
}
