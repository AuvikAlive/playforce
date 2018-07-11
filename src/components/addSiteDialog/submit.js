export const submit = ({
  addSite,
  userId,
  closeDialog,
  setFeedback,
}) => async site => {
  await addSite(userId, site)

  closeDialog()
  setFeedback({ success: 'Site published!' })
}
