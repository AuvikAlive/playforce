export const toggleLightbox = component => () => {
  const { isOpen } = component.state

  component.setState({ isOpen: !isOpen })
}
