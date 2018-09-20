import { TOGGLE_INSPECTION_COMPLETE } from '../../actionTypes'
import { getBatch, getRootRef } from '../dbActions/'

export const toggleInspectionComplete = (
  userId,
  inspectionId,
  complete,
  inspectionCompleteCount = 0
) => async (dispatch, getState, getFirebase) => {
  const batch = dispatch(getBatch)
  const rootRef = dispatch(getRootRef)
  const ref = rootRef.collection('inspections').doc(inspectionId)

  dispatch({
    type: TOGGLE_INSPECTION_COMPLETE,
  })

  if (!complete) {
    batch.update(rootRef, {
      inspectionCompleteCount: inspectionCompleteCount + 1,
    })
  } else {
    batch.update(rootRef, {
      inspectionCompleteCount: inspectionCompleteCount - 1,
    })
  }

  batch.update(ref, { complete: !complete })

  return batch.commit()
}
