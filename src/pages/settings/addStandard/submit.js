export const submit = component => async standard => {
  const { addStandard, userId } = component.props
  const standardId = await addStandard(userId, standard)

  return standardId
}
