export const submit = component => async () => {
  const { temperature, humidity, rain, apparatus } = component.state
  const { setFeedback, onSubmit, afterSubmit } = component.props

  if (temperature && humidity && rain && apparatus) {
    setFeedback({ error: '', loading: true })

    try {
      await onSubmit({
        temperature,
        humidity,
        rain,
        apparatus,
      })
      setFeedback({ loading: false })
      afterSubmit && afterSubmit()
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
