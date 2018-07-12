export const onComponentWillUnmountWithTitleRightNav = component => {
  const { removeNavTitle, removeRightNavComponent } = component.context

  removeNavTitle()
  removeRightNavComponent()
}
