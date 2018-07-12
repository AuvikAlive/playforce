export const onComponentWillUnmount = component => {
  const { removeRightNav } = component.props

  removeRightNav && removeRightNav()
}
