import { getResult } from './getResult'

export const submit = component => async () => {
  const { dropHeight, location, hic, hicDuration, gmax } = component.state
  const { setFeedback, onSubmit, afterSubmit, image } = component.props

  if (image && location && dropHeight && hic && hicDuration && gmax) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        image,
        location,
        dropHeight,
        hic,
        hicDuration,
        gmax,
        result: getResult(hic, hicDuration, gmax),
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
