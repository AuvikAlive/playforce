import { loadInitialData, loadImages } from '../../../../functions/'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { imageCaptured, initialData, images } = nextProps

  if (initialData && initialData !== component.props.initialData) {
    loadInitialData(component, initialData)
  }

  if (imageCaptured && images !== component.props.images) {
    const { setFeedback } = component.props
    const notPortrait = images.some(
      ({ imageNaturalAspectRatio }) => imageNaturalAspectRatio > 1
    )

    loadImages(component, images)

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
}
