export const onComponentWillUnmount = component => {
  const {
    removeNavTitle,
    removeLefNavComponent,
    removeRightNavComponent,
  } = this.context

  removeNavTitle()
  removeLefNavComponent()
  removeRightNavComponent()
}
