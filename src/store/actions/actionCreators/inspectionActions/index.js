import {
  addComplianceIssue,
  updateComplianceIssue,
  deleteComplianceIssue,
  fetchComplianceIssues,
  fetchComplianceIssuesRealTime,
} from './complianceIssueActions/'
import {
  addConditionRating,
  updateConditionRating,
  deleteConditionRating,
  fetchConditionRatings,
  fetchConditionRatingsRealTime,
} from './conditionRatingActions/'
import { addDropTest, updateDropTest, deleteDropTest } from './dropTestActions/'
import {
  addMaintenanceIssue,
  updateMaintenanceIssue,
  deleteMaintenanceIssue,
  fetchMaintenanceIssues,
  fetchMaintenanceIssuesRealTime,
} from './maintenanceIssueActions/'
import {
  saveImpactGeneralInfo,
  deleteImpactTest,
  addSurfaceTest,
  updateSurfaceTest,
  deleteSurfaceTest,
  fetchImpactTests,
  fetchImpactTestsRealTime,
} from './impactTestActions/'
import {
  addPlayground,
  deletePlayground,
  fetchPlaygrounds,
  fetchPlaygroundsRealTime,
  addPlaygroundComplianceIssue,
  updatePlaygroundComplianceIssue,
  deletePlaygroundComplianceIssue,
  addPlaygroundConditionRating,
  updatePlaygroundConditionRating,
  deletePlaygroundConditionRating,
  addPlaygroundDropTest,
  updatePlaygroundDropTest,
  deletePlaygroundDropTest,
  addPlaygroundMaintenanceIssue,
  updatePlaygroundMaintenanceIssue,
  deletePlaygroundMaintenanceIssue,
  addPlaygroundPlayingSurface,
  updatePlaygroundPlayingSurface,
  deletePlaygroundPlayingSurface,
  addPlaygroundSurfaceTest,
  updatePlaygroundSurfaceTest,
  deletePlaygroundSurfaceTest,
  savePlaygroundImpactGeneralInfo,
  deletePlaygroundImpactTest,
} from './playgroundActions/'
import {
  addPlayingSurface,
  updatePlayingSurface,
  deletePlayingSurface,
  fetchPlayingSufacesRealTime,
} from './playingSurfaceActions/'
import { addInspection } from './addInspection'
import { fetchInspection } from './fetchInspection'
import { fetchInspectionRealTime } from './fetchInspectionRealTime'
import { deleteInspection } from './deleteInspection'
import { updateCover } from './updateCover'
import { updateAuditSummary } from './updateAuditSummary'
import { saveCustomCertificateText } from './saveCustomCertificateText'
import { saveNotes } from './saveNotes'
import { toggleInspectionCertificate } from './toggleInspectionCertificate'
import { toggleInspectionComplete } from './toggleInspectionComplete'
import {
  DISCARD_INSPECTION,
  // TOGGLE_INSPECTION_CERTIFICATE,
} from '../../actionTypes'

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
  updateSurfaceTest,
  fetchImpactTestsRealTime,
  fetchImpactTests,
  addDropTest,
  updateDropTest,
  deleteDropTest,
  saveCustomCertificateText,
  saveNotes,
  addPlayingSurface,
  updatePlayingSurface,
  deletePlayingSurface,
  fetchPlayingSufacesRealTime,
  addPlayground,
  fetchPlaygroundsRealTime,
  fetchPlaygrounds,
  deletePlayground,
  addPlaygroundConditionRating,
  updatePlaygroundConditionRating,
  deletePlaygroundConditionRating,
  addPlaygroundComplianceIssue,
  updatePlaygroundComplianceIssue,
  deletePlaygroundComplianceIssue,
  addPlaygroundMaintenanceIssue,
  updatePlaygroundMaintenanceIssue,
  deletePlaygroundMaintenanceIssue,
  addPlaygroundPlayingSurface,
  updatePlaygroundPlayingSurface,
  deletePlaygroundPlayingSurface,
  savePlaygroundImpactGeneralInfo,
  deletePlaygroundImpactTest,
  addPlaygroundSurfaceTest,
  updatePlaygroundSurfaceTest,
  deletePlaygroundSurfaceTest,
  addPlaygroundDropTest,
  updatePlaygroundDropTest,
  deletePlaygroundDropTest,
  toggleInspectionCertificate,
  toggleInspectionComplete,
}

export const discardInspection = () => ({
  type: DISCARD_INSPECTION,
})

// export const toggleInspectionCertificate = () => ({
//   type: TOGGLE_INSPECTION_CERTIFICATE,
// })
