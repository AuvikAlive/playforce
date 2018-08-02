export const submit = component => async () => {
  const { updateProfile, setFeedback } = component.props
  const { defaultCertificateText } = component.state

  setFeedback({ error: '', loading: true })

  if (defaultCertificateText) {
    try {
      await updateProfile({ defaultCertificateText })
      setFeedback({ success: 'Certifcate text updated!', loading: false })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  } else {
    setFeedback({
      error: 'Please fill up the form correctly!',
      loading: false,
    })
  }
}
