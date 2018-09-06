import { getRootRef } from '../dbActions/'

export const saveStandard = (userId, data, id) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const rootRef = dispatch(getRootRef)
  const collectionRef = rootRef.collection('standards')
  const ref = id ? collectionRef.doc(id) : collectionRef.doc()

  return id ? ref.update(data) : ref.set(data)
}
