import { getGeocode } from '../../../functions/'

export const submit = component => async () => {
  const {
    name,
    street,
    suburb,
    state,
    postcode,
    country,
    division,
    operator,
  } = component.state

  const { onSubmit, afterSubmit, userId, setFeedback } = component.props

  if (name && street && suburb && state && postcode && country && operator) {
    setFeedback({ error: '', loading: true })
    const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

    try {
      const location = await getGeocode(address)
      const site = {
        addedUser: userId,
        name,
        street,
        suburb,
        state,
        postcode,
        country,
        division,
        operator,
        latitude: Number(location.lat().toFixed(5)),
        longitude: Number(location.lng().toFixed(5)),
      }
      const result = await onSubmit(site)
      setFeedback({ loading: false })
      afterSubmit && afterSubmit(result)
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
