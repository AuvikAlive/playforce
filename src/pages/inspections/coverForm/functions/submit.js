import { inspectionTypes } from '../../../../constants/'

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
    clientAddress,
    inspectionDate,
    appliedStandards,
  } = component.state

  if (location && client && inspectionDate && appliedStandards.length > 0) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        image,
        displayName,
        location: sites.find(({ name }) => name === location),
        client,
        clientAddress,
        inspectionDate,
        appliedStandards,
        inspectionType: inspectionTypes[0],
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
