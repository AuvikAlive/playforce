import { loadInspection } from '../inspectionActions'

export const fetchInspection = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase
) => {
  const firebase = getFirebase()
  const db = firebase.firestore()

  const inspectionRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  const inspectionDoc = await inspectionRef.get()
  const inspection = inspectionDoc.data()

  const {
    conditionRatingsAdded,
    maintenanceIssuesAdded,
    complianceIssuesAdded,
  } = inspection

  if (conditionRatingsAdded) {
    let conditionRatings = []
    const querySnapshot = await inspectionRef
      .collection('conditionRatings')
      .get()

    querySnapshot.forEach(doc =>
      conditionRatings.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    inspection.conditionRatings = conditionRatings
  }

  if (complianceIssuesAdded) {
    let complianceIssues = []
    const querySnapshot = await inspectionRef
      .collection('complianceIssues')
      .get()

    querySnapshot.forEach(doc => {
      complianceIssues.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    inspection.complianceIssues = complianceIssues
  }

  if (maintenanceIssuesAdded) {
    let maintenanceIssues = []
    const querySnapshot = await inspectionRef
      .collection('maintenanceIssues')
      .get()
    querySnapshot.forEach(doc =>
      maintenanceIssues.push({
        id: doc.id,
        ...doc.data(),
      })
    )
    inspection.maintenanceIssues = maintenanceIssues
  }
  dispatch(loadInspection(inspection))

  return inspection
}
