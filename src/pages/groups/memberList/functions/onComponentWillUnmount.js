export const onComponentWillUnmount = component => {
  const {
    removeNavTitle,
    removeLefNavComponent,
    removeRightNavComponent,
  } = component.context

  removeNavTitle()
  removeLefNavComponent()
  removeRightNavComponent()
}
