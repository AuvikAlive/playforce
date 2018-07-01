export const getSuggestionsByName = (value, array) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? array.map(item => item.name)
    : array
        .filter(
          item => item.name.toLowerCase().slice(0, inputLength) === inputValue
        )
        .map(item => item.name)
}
