import { inspectionTypes } from '../../../../constants/'

export const submit = component => async () => {
  const {
    location,
    client,
    inspectionDate,
    temperature,
    humidity,
    rain,
    apparatus,
    appliedStandards,
  } = component.state

  const {
    sites,
    displayName,
    title,
    company,
    signature,
    setFeedback,
    onSubmit,
    afterSubmit,
  } = component.props

  if (
    location &&
    client &&
    inspectionDate &&
    temperature &&
    humidity &&
    rain &&
    apparatus &&
    appliedStandards.length > 0
  ) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        location: sites.find(({ name }) => name === location),
        client,
        inspectionDate,
        temperature,
        humidity,
        rain,
        apparatus,
        appliedStandards,
        inspectionType: inspectionTypes[1],
        displayName,
        title,
        company,
        signature,
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
