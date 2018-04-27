import { addInspection } from './addInspection'
import { fetchInspection } from './fetchInspection'
import { fetchInspectionRealTime } from './fetchInspectionRealTime'
import { deleteInspection } from './deleteInspection'
import { saveCover } from './saveCover'
import { saveAuditSummary } from './saveAuditSummary'
import { addMaintenanceIssue } from './addMaintenanceIssue'
import { editMaintenanceIssue } from './editMaintenanceIssue'
import { deleteMaintenanceIssue } from './deleteMaintenanceIssue'
import { fetchMaintenanceIssuesRealTime } from './fetchMaintenanceIssuesRealTime'
import { DISCARD_INSPECTION } from '../../actionTypes'

export {
  addInspection,
  fetchInspection,
  fetchInspectionRealTime,
  deleteInspection,
  saveCover,
  saveAuditSummary,
  addMaintenanceIssue,
  editMaintenanceIssue,
  deleteMaintenanceIssue,
  fetchMaintenanceIssuesRealTime,
}

export const discardInspection = () => ({
  type: DISCARD_INSPECTION,
})
