import { addInspection } from './addInspection'
import { fetchInspection } from './fetchInspection'
import { fetchInspectionRealTime } from './fetchInspectionRealTime'
import { deleteInspection } from './deleteInspection'
import { saveCover } from './saveCover'
import { saveAuditSummary } from './saveAuditSummary'
import { addConditionRating } from './addConditionRating'
import { saveConditionRating } from './saveConditionRating'
import { deleteConditionRating } from './deleteConditionRating'
import { fetchConditionRatingsRealTime } from './fetchConditionRatingsRealTime'
import { addMaintenanceIssue } from './addMaintenanceIssue'
import { saveMaintenanceIssue } from './saveMaintenanceIssue'
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
  addConditionRating,
  saveConditionRating,
  deleteConditionRating,
  fetchConditionRatingsRealTime,
  addMaintenanceIssue,
  saveMaintenanceIssue,
  deleteMaintenanceIssue,
  fetchMaintenanceIssuesRealTime,
}

export const discardInspection = () => ({
  type: DISCARD_INSPECTION,
})
