import { images } from '../constants'

export const onSave = component => async () => {
  const { currentSlide } = component.state
  const { updateProfile, setFeedback } = component.props
  const image = images[currentSlide].image

  setFeedback({ error: '', loading: true })

  try {
    await updateProfile({ background: image })
    setFeedback({ success: 'Background updated!', loading: false })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
