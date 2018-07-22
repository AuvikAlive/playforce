export const submitAncillaryEquipment = async component => {
  const {
    onSubmit,
    afterSubmit,
    setFeedback,
    image,
    equipmentsSite,
    siteId,
    equipments,
    addEquipment,
    userId,
  } = component.props

  const { itemType, equipment, condition } = component.state

  if (image && equipment && condition) {
    setFeedback({ error: '', loading: true })

    addEquipment &&
      equipmentsSite === siteId &&
      !equipments.find(item => item.equipment === equipment) &&
      addEquipment(userId, siteId, {
        image,
        itemType,
        equipment,
      })

    const result = await onSubmit({
      image,
      itemType,
      equipment,
      condition,
    })

    setFeedback({ loading: false })
    afterSubmit && afterSubmit(result)
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
