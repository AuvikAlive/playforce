export const saveInspection = ({
  inspection,
  userId,
  inspectionId,
  inspectionCount,
}) => async (dispatch, getState, getFirebase) => {
  const {
    equipments,
    cover,
    coverAdded,
    auditSummary,
    auditSummaryAdded,
    conditionRatings,
    conditionRatingsAdded,
    deletedConditionRatings,
    complianceIssues,
    complianceIssuesAdded,
    deletedComplianceIssues,
    maintenanceIssues,
    maintenanceIssuesAdded,
    deletedMaintenanceIssues,
  } = inspection

  let dataToSave = {
    site: cover.location.id,
    cover,
    coverAdded,
    auditSummaryAdded,
    conditionRatingsAdded,
    complianceIssuesAdded,
    maintenanceIssuesAdded,
  }

  Object.assign(
    dataToSave,
    auditSummaryAdded && { auditSummary },
    inspectionCount && { inspectionNumber: inspectionCount }
  )

  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const inspectionRef = inspectionId
    ? db
        .collection('users')
        .doc(userId)
        .collection('inspections')
        .doc(inspectionId)
    : db
        .collection('users')
        .doc(userId)
        .collection('inspections')
        .doc()

  inspectionId
    ? batch.update(inspectionRef, dataToSave)
    : batch.set(inspectionRef, dataToSave)

  if (!!equipments) {
    const equipmentsRef = db
      .collection('users')
      .doc(userId)
      .collection('sites')
      .doc(cover.location.id)
      .collection('equipments')

    equipments.forEach(item => {
      const ref = equipmentsRef.doc(item.assetId)
      batch.set(ref, item)
    })
  }

  if (!!deletedConditionRatings) {
    const coditionRatingsRef = inspectionRef.collection('conditionRatings')

    deletedConditionRatings.forEach(item => {
      const ref = coditionRatingsRef.doc(item.id)
      batch.delete(ref)
    })
  }

  if (conditionRatingsAdded) {
    const coditionRatingsRef = inspectionRef.collection('conditionRatings')

    conditionRatings.forEach(item => {
      const ref = item.id
        ? coditionRatingsRef.doc(item.id)
        : coditionRatingsRef.doc()
      item.id ? batch.update(ref, item) : batch.set(ref, item)
    })
  }

  if (!!deletedComplianceIssues) {
    const complianceIssuesRef = inspectionRef.collection('complianceIssues')

    deletedComplianceIssues.forEach(item => {
      const ref = complianceIssuesRef.doc(item.id)
      batch.delete(ref)
    })
  }

  if (complianceIssuesAdded) {
    const complianceIssuesRef = inspectionRef.collection('complianceIssues')

    complianceIssues.forEach(async item => {
      const ref = item.id
        ? complianceIssuesRef.doc(item.id)
        : complianceIssuesRef.doc()
      item.id ? batch.update(ref, item) : batch.set(ref, item)
    })
  }

  if (!!deletedMaintenanceIssues) {
    const maintenanceIssuesRef = inspectionRef.collection('maintenanceIssues')

    deletedMaintenanceIssues.forEach(item => {
      const ref = maintenanceIssuesRef.doc(item.id)
      batch.delete(ref)
    })
  }

  if (maintenanceIssuesAdded) {
    const maintenanceIssuesRef = inspectionRef.collection('maintenanceIssues')

    maintenanceIssues.forEach(item => {
      const ref = item.id
        ? maintenanceIssuesRef.doc(item.id)
        : maintenanceIssuesRef.doc()
      item.id ? batch.update(ref, item) : batch.set(ref, item)
    })
  }

  await batch.commit()

  return inspectionRef.id
}
