export const submit = component => async () => {
  const { displayName, title, company, mobile } = component.state
  const { updateProfile, setFeedback, image } = component.props

  setFeedback({ error: '', loading: true })

  let data = {}
  Object.assign(
    data,
    displayName && { displayName },
    title && { title },
    company && { company },
    mobile && { mobile },
    image && { image },
    !component.signature.isEmpty() && {
      signature: component.signature.getSignature(),
    }
  )

  try {
    await updateProfile(data)
    setFeedback({ success: 'Profile updated!', loading: false })
  } catch (error) {
    setFeedback({ error: error.message, loading: false })
  }
}
