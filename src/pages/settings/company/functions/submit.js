export const submit = component => async () => {
  const { postalAddress, abn, phoneNumber, website } = component.state
  const { firebase, setFeedback } = component.props

  setFeedback({ error: '', loading: true })

  try {
    await firebase.updateProfile({
      companyInfo: {
        postalAddress,
        abn,
        phoneNumber,
        website,
      },
    })

    setFeedback({ success: 'Info updated!', loading: false })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
