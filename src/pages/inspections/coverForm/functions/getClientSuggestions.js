export const getClientSuggestions = component => value => {
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length
  const { clients } = component.props

  return inputLength === 0
    ? clients.map(item => item.name)
    : clients
        .filter(
          item => item.name.toLowerCase().slice(0, inputLength) === inputValue
        )
        .map(item => item.name)
}
