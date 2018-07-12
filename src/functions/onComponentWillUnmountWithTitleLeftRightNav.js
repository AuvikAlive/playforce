export const onComponentWillUnmountWithTitleLeftRightNav = component => {
  const {
    removeNavTitle,
    removeLefNavComponent,
    removeRightNavComponent,
  } = component.context

  removeNavTitle()
  removeLefNavComponent()
  removeRightNavComponent()
}
