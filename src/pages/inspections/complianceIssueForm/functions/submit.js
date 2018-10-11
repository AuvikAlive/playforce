export const submit = component => async () => {
  const {
    playingSurfaceMode,
    images,
    finding,
    equipment,
    playingSurface,
    standardsClause,
    probability,
    severity,
    comments,
    recommendations,
  } = component.state

  const { onSubmit, afterSubmit, setFeedback } = component.props

  if (
    playingSurfaceMode
      ? playingSurface
      : equipment &&
        images.length > 0 &&
        finding &&
        standardsClause &&
        probability &&
        severity &&
        comments &&
        recommendations
  ) {
    setFeedback({ error: '', loading: true })

    const dataToSave = {
      finding,
      ...(playingSurfaceMode ? { playingSurface } : { equipment }),
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
      images: images.slice(0, 4),
    }

    try {
      const result = await onSubmit(dataToSave)
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
