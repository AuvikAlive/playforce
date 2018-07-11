export const submitEquipment = async component => {
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
  const {
    itemType,
    equipment,
    assetId,
    manufacturer,
    condition,
    estimatedDateInstalled,
  } = component.state

  if (
    image &&
    equipment &&
    assetId &&
    manufacturer &&
    condition &&
    estimatedDateInstalled
  ) {
    setFeedback({ error: '', loading: true })

    addEquipment &&
      equipmentsSite === siteId &&
      !equipments.find(item => item.equipment === equipment) &&
      addEquipment(userId, siteId, {
        image,
        itemType,
        equipment,
        assetId,
        manufacturer,
        estimatedDateInstalled,
      })

    const result = await onSubmit({
      image,
      itemType,
      equipment,
      assetId,
      manufacturer,
      estimatedDateInstalled,
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
