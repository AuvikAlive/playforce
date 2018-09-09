import { getRootRef } from '../dbActions/'

export const fetchInspectionsByIdWithComplianceIssues = (
  userId,
  list
) => async (dispatch, getState, getFirebase) => {
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections')

  const Promises = list.map(async inspectionId => {
    const inspectionRef = ref.doc(inspectionId)
    const doc = await inspectionRef.get()

    let complianceIssues = []

    const complianceIssuesSnapshot = await inspectionRef
      .collection('complianceIssues')
      .get()

    complianceIssuesSnapshot.forEach(doc => {
      complianceIssues.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    return {
      id: doc.id,
      ...doc.data(),
      complianceIssues,
    }
  })

  const items = await Promise.all(Promises)

  return items
}
