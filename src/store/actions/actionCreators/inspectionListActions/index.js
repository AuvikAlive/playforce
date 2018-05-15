import { fetchInspectionsRealTime } from './fetchInspectionsRealTime'
import { fetchInspectionsBySiteRealTime } from './fetchInspectionsBySiteRealTime'
import { archiveInspections } from './archiveInspections'
import { TOGGLE_INSPECTIONLIST_VIEW } from '../../actionTypes'

export {
  fetchInspectionsRealTime,
  fetchInspectionsBySiteRealTime,
  archiveInspections,
}

export const toggleView = () => ({
  type: TOGGLE_INSPECTIONLIST_VIEW,
})
