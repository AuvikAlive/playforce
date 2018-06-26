export const getOperatorSuggestions = (value, operators) => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? operators.map(item => item.name)
    : operators
        .filter(
          item => item.name.toLowerCase().slice(0, inputLength) === inputValue
        )
        .map(item => item.name)
}
