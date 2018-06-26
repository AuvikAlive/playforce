export const getEquipmentSuggestions = (value, equipments) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? equipments.map(item => item.equipment)
    : equipments
        .filter(
          item =>
            item.equipment.toLowerCase().slice(0, inputLength) === inputValue
        )
        .map(item => item.equipment)
}
