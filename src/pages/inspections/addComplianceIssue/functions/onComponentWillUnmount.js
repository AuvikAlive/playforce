export const onComponentWillUnmount = component => {
  const { removeNavTitle, removeLefNavComponent } = component.context

  removeNavTitle()
  removeLefNavComponent()
}
