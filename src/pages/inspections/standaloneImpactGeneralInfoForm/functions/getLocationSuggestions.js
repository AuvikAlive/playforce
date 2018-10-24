export const getLocationSuggestions = component => value => {
  const { sites } = component.props
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? sites.map(item => item.name)
    : sites
        .filter(
          item => item.name.toLowerCase().slice(0, inputLength) === inputValue
        )
        .map(item => item.name)
}
