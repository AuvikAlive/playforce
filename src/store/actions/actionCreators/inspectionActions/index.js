import { addInspection } from './addInspection'
import { fetchInspection } from './fetchInspection'
import { fetchInspectionRealTime } from './fetchInspectionRealTime'
import { deleteInspection } from './deleteInspection'
import { updateCover } from './updateCover'
import { updateAuditSummary } from './updateAuditSummary'
import { addConditionRating } from './addConditionRating'
import { updateConditionRating } from './updateConditionRating'
import { deleteConditionRating } from './deleteConditionRating'
import { fetchConditionRatings } from './fetchConditionRatings'
import { fetchConditionRatingsRealTime } from './fetchConditionRatingsRealTime'
import { addComplianceIssue } from './addComplianceIssue'
import { updateComplianceIssue } from './updateComplianceIssue'
import { deleteComplianceIssue } from './deleteComplianceIssue'
import { fetchComplianceIssues } from './fetchComplianceIssues'
import { fetchComplianceIssuesRealTime } from './fetchComplianceIssuesRealTime'
import { addMaintenanceIssue } from './addMaintenanceIssue'
import { updateMaintenanceIssue } from './updateMaintenanceIssue'
import { deleteMaintenanceIssue } from './deleteMaintenanceIssue'
import { fetchMaintenanceIssues } from './fetchMaintenanceIssues'
import { fetchMaintenanceIssuesRealTime } from './fetchMaintenanceIssuesRealTime'
import { saveImpactGeneralInfo } from './saveImpactGeneralInfo'
import { deleteImpactTest } from './deleteImpactTest'
import { addSurfaceTest } from './addSurfaceTest'
import { deleteSurfaceTest } from './deleteSurfaceTest'
import { updateImpactSurface } from './updateImpactSurface'
import { fetchImpactTestsRealTime } from './fetchImpactTestsRealTime'
import { fetchImpactTests } from './fetchImpactTests'
import { addDropTest } from './addDropTest'
import { updateDropTest } from './updateDropTest'
import { deleteDropTest } from './deleteDropTest'
import { DISCARD_INSPECTION } from '../../actionTypes'

export {
  addInspection,
  fetchInspection,
  fetchInspectionRealTime,
  deleteInspection,
  updateCover,
  updateAuditSummary,
  addConditionRating,
  updateConditionRating,
  deleteConditionRating,
  fetchConditionRatings,
  fetchConditionRatingsRealTime,
  addComplianceIssue,
  updateComplianceIssue,
  deleteComplianceIssue,
  fetchComplianceIssues,
  fetchComplianceIssuesRealTime,
  addMaintenanceIssue,
  updateMaintenanceIssue,
  deleteMaintenanceIssue,
  fetchMaintenanceIssues,
  fetchMaintenanceIssuesRealTime,
  saveImpactGeneralInfo,
  deleteImpactTest,
  addSurfaceTest,
  deleteSurfaceTest,
  updateImpactSurface,
  fetchImpactTestsRealTime,
  fetchImpactTests,
  addDropTest,
  updateDropTest,
  deleteDropTest,
}

export const discardInspection = () => ({
  type: DISCARD_INSPECTION,
})
