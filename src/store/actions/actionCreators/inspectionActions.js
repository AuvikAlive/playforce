import {
  SAVE_INSPECTION_DRAFT,
  LOAD_INSPECTION_DRAFT,
  EDIT_INSPECTION,
  LOAD_INSPECTION,
  DISCARD_INSPECTION,
  ADD_INSPECTION_COVER,
  ADD_INSPECTION_SUMMARY,
  ADD_CONDITION_RATING,
  EDIT_CONDITION_RATING,
  DELETE_CONDITION_RATING,
  ADD_COMPLIANCE_ISSUE,
  EDIT_COMPLIANCE_ISSUE,
  DELETE_COMPLIANCE_ISSUE,
  ADD_MAINTENANCE_ISSUE,
  EDIT_MAINTENANCE_ISSUE,
  DELETE_MAINTENANCE_ISSUE,
} from '../actionTypes'

export const saveInspectionDraft = () => ({
  type: SAVE_INSPECTION_DRAFT,
})

export const loadInspectionDraft = () => ({
  type: LOAD_INSPECTION_DRAFT,
})

export const toggleEditInspection = payload => ({
  type: EDIT_INSPECTION,
  payload,
})

export const loadInspection = payload => ({
  type: LOAD_INSPECTION,
  payload,
})

export const discardInspection = () => ({
  type: DISCARD_INSPECTION,
})

export const addInspectionCover = payload => ({
  type: ADD_INSPECTION_COVER,
  payload,
})

export const addInspectionSummary = payload => ({
  type: ADD_INSPECTION_SUMMARY,
  payload,
})

export const addConditionRating = payload => ({
  type: ADD_CONDITION_RATING,
  payload,
})

export const editConditionRating = payload => ({
  type: EDIT_CONDITION_RATING,
  payload,
})

export const deleteConditionRating = payload => ({
  type: DELETE_CONDITION_RATING,
  payload,
})

export const addComplianceIssue = payload => ({
  type: ADD_COMPLIANCE_ISSUE,
  payload,
})

export const editComplianceIssue = payload => ({
  type: EDIT_COMPLIANCE_ISSUE,
  payload,
})

export const deleteComplianceIssue = payload => ({
  type: DELETE_COMPLIANCE_ISSUE,
  payload,
})

export const addMaintenanceIssue = payload => ({
  type: ADD_MAINTENANCE_ISSUE,
  payload,
})

export const editMaintenanceIssue = payload => ({
  type: EDIT_MAINTENANCE_ISSUE,
  payload,
})

export const deleteMaintenanceIssue = payload => ({
  type: DELETE_MAINTENANCE_ISSUE,
  payload,
})

export const fetchInspection = (userId, inspectionId) => async (
  dispatch,
  getState,
  getFirebase,
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
      }),
    )
    inspection.conditionRatings = conditionRatings
  }

  if (complianceIssuesAdded) {
    let complianceIssues = []
    const querySnapshot = await inspectionRef
      .collection('complianceIssues')
      .get()

    querySnapshot.forEach(async doc => {
      // let images = []
      // const querySnapshot = await doc.ref.collection('images').get()

      // querySnapshot.forEach(doc =>
      //   images.push({
      //     id: doc.id,
      //     ...doc.data(),
      //   }),
      // )

      complianceIssues.push({
        id: doc.id,
        ...doc.data(),
        // images,
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
      }),
    )
    inspection.maintenanceIssues = maintenanceIssues
  }
  dispatch(loadInspection(inspection))
}

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
    !!equipments && { equipments },
    inspectionCount && { inspectionNumber: inspectionCount },
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
      // const { images, previousImages } = item
      // delete item.images
      delete item.previousImages
      const ref = item.id
        ? complianceIssuesRef.doc(item.id)
        : complianceIssuesRef.doc()
      item.id ? batch.update(ref, item) : batch.set(ref, item)

      // const imagesRef = ref.collection('images')

      // !!previousImages &&
      //   previousImages.forEach(id => {
      //     const ref = imagesRef.doc(id)
      //     batch.delete(ref)
      //   })

      // images.forEach(image => {
      //   const ref = imagesRef.doc()
      //   batch.set(ref, image)
      // })
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

  return batch.commit()
}

export const deleteInspection = ({
  inspection,
  userId,
  inspectionId,
}) => async (dispatch, getState, getFirebase) => {
  const {
    conditionRatings,
    conditionRatingsAdded,
    complianceIssues,
    complianceIssuesAdded,
    maintenanceIssues,
    maintenanceIssuesAdded,
  } = inspection

  const firebase = getFirebase()
  const db = firebase.firestore()
  const batch = db.batch()
  const inspectionRef = db
    .collection('users')
    .doc(userId)
    .collection('inspections')
    .doc(inspectionId)

  if (conditionRatingsAdded) {
    const coditionRatingsRef = inspectionRef.collection('conditionRatings')

    conditionRatings.forEach(item => {
      const ref = coditionRatingsRef.doc(item.id)
      batch.delete(ref)
    })
  }

  if (complianceIssuesAdded) {
    const complianceIssuesRef = inspectionRef.collection('complianceIssues')

    complianceIssues.forEach(item => {
      const ref = complianceIssuesRef.doc(item.id)
      batch.delete(ref)

      // const { images } = item
      // const imagesRef = ref.collection('images')
      // images.forEach(({ id }) => {
      //   const ref = imagesRef.doc(id)
      //   batch.delete(ref)
      // })
    })
  }

  if (maintenanceIssuesAdded) {
    const maintenanceIssuesRef = inspectionRef.collection('maintenanceIssues')

    maintenanceIssues.forEach(item => {
      const ref = maintenanceIssuesRef.doc(item.id)
      batch.delete(ref)
    })
  }

  batch.delete(inspectionRef)

  return batch.commit()
}
