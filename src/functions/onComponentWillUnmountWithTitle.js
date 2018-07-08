export const onComponentWillUnmountWithTitle = component => {
  const { removeNavTitle } = component.context

  removeNavTitle()
}
