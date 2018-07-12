export const onSuggestionsClearRequested = component => () => {
  component.setState({
    suggestions: [],
  })
}
