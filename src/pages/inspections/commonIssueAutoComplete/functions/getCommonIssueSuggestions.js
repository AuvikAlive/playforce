export const getCommonIssueSuggestions = component => value => {
  const { commonIssues } = component.state
  const inputValue = value.trim().toLowerCase()
  const inputLength = inputValue.length

  return inputLength === 0
    ? commonIssues.filter(({ items }) => !!items.every(item => !!item.issue))
    : commonIssues
        .map(({ title, items }) => {
          return {
            title,
            items: items.filter(
              item =>
                item.issue.toLowerCase().slice(0, inputLength) === inputValue
            ),
          }
        })
        .filter(({ items }) => items.length > 0)
}
