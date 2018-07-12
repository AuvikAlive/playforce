export const onEquipmentSelect = component => value => {
  const { equipments, setCapturedImage } = component.props
  const equipment = equipments.find(({ equipment }) => equipment === value)

  if (equipment) {
    setCapturedImage(equipment.image)
    component.setState({
      ...equipment,
    })
  } else {
    component.setState({ equipment: value })
  }
}
