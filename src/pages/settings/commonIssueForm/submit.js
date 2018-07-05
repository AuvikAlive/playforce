export const submit = component => async () => {
  const { onSubmit, afterSubmit, setFeedback } = component.props

  const {
    issue,
    category,
    finding,
    standardsClause,
    implementationDate,
    preImplementationText,
    probability,
    severity,
    comments,
    recommendations,
  } = component.state

  if (
    (issue,
    finding &&
      standardsClause &&
      implementationDate &&
      preImplementationText &&
      probability &&
      severity &&
      comments &&
      recommendations)
  ) {
    setFeedback({ error: '', loading: true })

    try {
      const result = await onSubmit({
        issue,
        category,
        finding,
        standardsClause,
        implementationDate,
        preImplementationText,
        probability,
        severity,
        comments,
        recommendations,
      })

      setFeedback({ loading: false })
      afterSubmit && afterSubmit(result)
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
    })
  }
}
