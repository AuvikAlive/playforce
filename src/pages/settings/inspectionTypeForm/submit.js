export const submit = component => async () => {
  const { inspectionType } = component.state
  const { setFeedback, userId } = component.props

  if (inspectionType) {
    setFeedback({ error: '', loading: true })

    const { saveInspectionType } = component.props

    try {
      await saveInspectionType(userId, { name: inspectionType })
      component.setState({ inspectionType: '' })
      setFeedback({ success: 'Inspection type added!', loading: false })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
