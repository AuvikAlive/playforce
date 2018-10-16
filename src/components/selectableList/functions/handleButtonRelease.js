export const handleButtonRelease = component => (...args) => {
  const {
    selectedItems,
    selectMode,
    setSelectMode,
    handleClick,
  } = component.props

  clearTimeout(component.buttonPressTimer)

  if (selectedItems.length === 0) {
    const { scrolling } = component.state

    !scrolling && !selectMode && handleClick && handleClick(...args)
    setSelectMode(false)
  } else {
    setSelectMode(true, selectedItems.length)
  }
}
