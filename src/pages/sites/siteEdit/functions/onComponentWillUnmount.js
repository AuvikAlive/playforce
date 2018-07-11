export const onComponentWillUnmount = component => {
  const { removeLefNavComponent, enableNavBarShadow } = component.context

  removeLefNavComponent()
  enableNavBarShadow()
}
