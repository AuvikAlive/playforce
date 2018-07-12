export const onComponentWillUnmountWithTitleLeftNav = component => {
  const { removeNavTitle, removeLefNavComponent } = component.context

  removeNavTitle()
  removeLefNavComponent()
}
