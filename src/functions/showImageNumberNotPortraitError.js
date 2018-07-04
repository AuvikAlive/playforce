export const showImageNumberNotPortraitError = (component, images) => {
  const { setFeedback } = component.props

  const notPortrait = images.some(
    ({ imageNaturalAspectRatio }) => imageNaturalAspectRatio > 1
  )

  if (images.length > 4 && notPortrait) {
    setFeedback({
      error: 'Please upload no more than 4 portrait image(s)!',
    })
  } else if (images.length > 4) {
    setFeedback({
      error: 'Please upload no more than 4 image(s)!',
    })
  } else if (notPortrait) {
    setFeedback({ error: 'Please upload portrait image(s)!' })
  } else {
    setFeedback({ error: '' })
  }
}
