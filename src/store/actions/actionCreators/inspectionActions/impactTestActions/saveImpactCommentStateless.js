export const saveImpactCommentStateless = (baseRef, id, comment) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const impactTestRef = baseRef.collection('impactTests').doc(id)

  await impactTestRef.update({ comment })

  return { comment, id }
}
