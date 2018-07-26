export const goNext = (component, photoIndex, images) => () => {
  const nextPhotoIndex = photoIndex + 1
  const imageArrayLength = images.length
  const { loop } = component.props

  if (loop) {
    component.setState({
      photoIndex: nextPhotoIndex % imageArrayLength,
    })
  } else {
    nextPhotoIndex < imageArrayLength &&
      component.setState({
        photoIndex: nextPhotoIndex % imageArrayLength,
      })
  }
}
