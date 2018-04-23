import { fetchInspectionsRealTime } from './fetchInspectionsRealTime'
import { fetchInspectionsBySiteRealTime } from './fetchInspectionsBySiteRealTime'
import { TOGGLE_INSPECTIONLIST_VIEW } from '../../actionTypes'

export { fetchInspectionsRealTime, fetchInspectionsBySiteRealTime }

export const toggleView = () => ({
  type: TOGGLE_INSPECTIONLIST_VIEW,
})
