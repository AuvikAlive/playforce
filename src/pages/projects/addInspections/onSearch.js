export const onSearch = component => query => {
  const { inspections } = component.props
  const inputValue = query.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? []
    : inspections.filter(
        ({ name }) => name.toLowerCase().slice(0, inputLength) === inputValue
      )
}
