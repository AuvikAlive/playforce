export const handleButtonPress = component => key => {
  const { setSelectedItems, selectedItems } = component.props

  component.buttonPressTimer = setTimeout(() => {
    if (selectedItems.find(item => item === key)) {
      setSelectedItems(selectedItems.filter(item => item !== key))
    } else {
      setSelectedItems([...selectedItems, key])
    }
  }, 300)
}
