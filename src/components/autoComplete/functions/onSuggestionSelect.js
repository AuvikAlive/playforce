export const onSuggestionSelect = component => (event, { suggestion }) => {
  const { onSuggestionSelect } = component.props

  onSuggestionSelect && onSuggestionSelect(suggestion)
}
