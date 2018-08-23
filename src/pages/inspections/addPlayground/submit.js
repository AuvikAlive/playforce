import { showActionGoBack } from '../../../functions/'

export const submit = component => async () => {
  const { name } = component.state
  const { setFeedback, addPlayground, userId, inspectionId } = component.props

  if (name) {
    setFeedback({ error: '', loading: true })

    try {
      await addPlayground(userId, inspectionId, {
        name,
      })
      setFeedback({ loading: false })
      showActionGoBack(component, 'Playground added!')()
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
