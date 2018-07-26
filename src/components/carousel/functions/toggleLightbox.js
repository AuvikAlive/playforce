export const toggleLightbox = component => () => {
  const { showLightbox } = component.props
  const { lightboxOpen } = component.state

  showLightbox && component.setState({ lightboxOpen: !lightboxOpen })
}
