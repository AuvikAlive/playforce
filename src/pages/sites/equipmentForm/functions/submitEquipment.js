export const submitEquipment = async component => {
  const { onSubmit, afterSubmit, setFeedback, image } = component.props

  const {
    itemType,
    equipment,
    assetId,
    manufacturer,
    estimatedDateInstalled,
  } = component.state

  if (image && equipment && assetId && manufacturer && estimatedDateInstalled) {
    setFeedback({ error: '', loading: true })

    const result = await onSubmit({
      image,
      itemType,
      equipment,
      assetId,
      manufacturer,
      estimatedDateInstalled,
    })

    setFeedback({ loading: false })
    afterSubmit && afterSubmit(result)
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
