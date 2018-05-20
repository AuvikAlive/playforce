import { fetchInspectionsRealTime } from './fetchInspectionsRealTime'
import { fetchInspectionsBySiteRealTime } from './fetchInspectionsBySiteRealTime'
import { archiveInspections } from './archiveInspections'
import { unarchiveInspections } from './unarchiveInspections'
import { searchInspections } from './searchInspections'
import { deleteInspections } from './deleteInspections'
import { TOGGLE_INSPECTIONLIST_VIEW } from '../../actionTypes'

export {
  fetchInspectionsRealTime,
  fetchInspectionsBySiteRealTime,
  archiveInspections,
  unarchiveInspections,
  searchInspections,
  deleteInspections,
}

export const toggleView = () => ({
  type: TOGGLE_INSPECTIONLIST_VIEW,
})
