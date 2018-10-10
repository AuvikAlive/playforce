export const onComponentWillUnmount = component => {
  const { removeLefNavComponent, removeBottomNavComponent } = component.context

  removeLefNavComponent()
  removeBottomNavComponent()
}
