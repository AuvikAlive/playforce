export const onComponentDidMountWithTitle = (component, title) => {
  const { setNavTitle } = component.context

  setNavTitle(title)
}
