export const submitAncillaryEquipment = async component => {
  const { onSubmit, afterSubmit, setFeedback, image } = component.props

  const { itemType, equipment } = component.state

  if (image && equipment) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        image,
        itemType,
        equipment,
      })

      setFeedback({ loading: false })
      afterSubmit && afterSubmit(result)
    } catch (error) {
      setFeedback({
        error: error.message,
        loading: false,
      })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
