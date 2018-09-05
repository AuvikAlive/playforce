export const submit = component => async data => {
  const {
    updateReportNote,
    userId,
    reportNoteId,
    setFeedback,
  } = component.props

  await updateReportNote(userId, reportNoteId, data)

  setFeedback({ success: 'Note updated!' })
}
