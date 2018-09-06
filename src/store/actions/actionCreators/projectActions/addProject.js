import { getRootRef } from '../dbActions/'

export const addProject = (userId, name) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('projects').doc(name)
  const doc = await ref.get()

  if (doc.exists) {
    throw new Error('Project with this name already exists!')
  } else {
    await ref.set({ name })
    return ref.id
  }
}
