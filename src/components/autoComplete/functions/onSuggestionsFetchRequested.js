export const onSuggestionsFetchRequested = component => async ({ value }) => {
  const { getSuggestions } = component.props
  const suggestions = await getSuggestions(value)

  component.setState({
    suggestions,
  })
}
