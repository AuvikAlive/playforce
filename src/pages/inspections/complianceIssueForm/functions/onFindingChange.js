export const onFindingChange = component => event => {
  const commonIssueIndex = event.target.value

  if (commonIssueIndex !== undefined) {
    const { commonIssues } = component.props
    const commonIssue = commonIssues[commonIssueIndex]

    component.setState({ commonIssueIndex, ...commonIssue })
  }
}