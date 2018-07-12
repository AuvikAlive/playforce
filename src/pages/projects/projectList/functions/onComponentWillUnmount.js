export const onComponentWillUnmount = component => {
  const { removeNavTitle } = component.context

  removeNavTitle()
}
