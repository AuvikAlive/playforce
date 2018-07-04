import { loadInitialDataWithImage } from '../../../../functions/'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const {
    initialData,
    imageCaptured,
    image,
    imageNaturalAspectRatio,
  } = nextProps

  if (initialData && initialData !== component.props.initialData) {
    loadInitialDataWithImage(component, initialData)
  }

  if (imageCaptured && image !== component.props.image) {
    const { setFeedback } = component.props

    imageNaturalAspectRatio >= 1
      ? setFeedback({ error: 'Please upload a portrait image!' })
      : setFeedback({ error: '' })
  }
}
