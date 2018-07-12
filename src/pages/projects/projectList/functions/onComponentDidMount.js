export const onComponentDidMount = async component => {
  const { setNavTitle, addUnsubscriber } = component.context
  const { projectsLoaded, fetchProjectsRealTime, userId } = component.props

  setNavTitle('Projects')

  !projectsLoaded && addUnsubscriber(await fetchProjectsRealTime(userId))
}
