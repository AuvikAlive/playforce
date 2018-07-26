export const goPrev = (component, photoIndex, images) => () => {
  const imageArrayLength = images.length
  const { loop } = component.props

  if (loop) {
    component.setState({
      photoIndex: (photoIndex + imageArrayLength - 1) % imageArrayLength,
    })
  } else {
    photoIndex > 0 &&
      component.setState({
        photoIndex: (photoIndex + imageArrayLength - 1) % imageArrayLength,
      })
  }
}
