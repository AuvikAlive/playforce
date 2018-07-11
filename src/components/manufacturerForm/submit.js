export const submit = component => async () => {
  const { manufacturer } = component.state
  const { saveManufacturer, userId, setFeedback } = component.props

  if (manufacturer) {
    setFeedback({ error: '', loading: true })

    try {
      await saveManufacturer(userId, { name: manufacturer })
      setFeedback({ loading: false })
      component.setState({ manufacturer: '' })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
      loading: false,
    })
  }
}
