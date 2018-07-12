export const onComponentDidMount = component => {
  const { setNavTitle } = component.context
  const { equipmentsSite, fetchEquipments, userId, siteId } = component.props

  setNavTitle('Edit Site')
  equipmentsSite !== siteId && fetchEquipments(userId, siteId)
}
