export const openLightbox = component => () => {
  const { isOpen } = component.state

  !isOpen && component.setState({ isOpen: true })
}
