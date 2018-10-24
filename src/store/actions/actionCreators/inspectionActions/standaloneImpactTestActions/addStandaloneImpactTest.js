import { getBatch, getRootRef } from '../../dbActions/'

export const addStandaloneImpactTest = (userId, data) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const batch = dispatch(getBatch)
  const rootRef = dispatch(getRootRef)
  const state = getState()
  const inspectionCount = state.databaseRoot.root.inspectionCount || 0
  const impactTestRef = rootRef.collection('inspections').doc()
  const { location } = data

  batch.update(rootRef, { inspectionCount: inspectionCount + 1 })

  batch.set(impactTestRef, {
    site: location.id,
    inspectionNumber: inspectionCount + 1,
    archived: false,
    impactGeneralInfo: data,
  })

  await batch.commit()

  return impactTestRef.id
}
