export const submit = component => async () => {
  const {
    onSubmit,
    afterSubmit,
    setFeedback,
    image,
    displayName,
    sites,
  } = component.props
  const {
    location,
    client,
    inspectionDate,
    appliedStandards,
    inspectionType,
  } = component.state

  if (
    location &&
    client &&
    inspectionDate &&
    appliedStandards.length > 0 &&
    inspectionType
  ) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        image,
        displayName,
        location: sites.find(({ name }) => name === location),
        client,
        inspectionDate,
        appliedStandards,
        inspectionType,
      })
      setFeedback({ loading: false })
      afterSubmit && afterSubmit(result)
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
