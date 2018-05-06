import { pageMargins } from './pageMargins'
import { pageSize } from './pageSize'
import { makeHeader } from './makeHeader'
import { makeFooter } from './makeFooter'
import { makeCertificate } from './makeCertificate/'
import { makeCover } from './makeCover/'
import { makeAuditSummary } from './makeAuditSummary'
import { makeConditionRatingInfo } from './makeConditionRatingInfo/'
import { makeIndividualConditionRatings } from './makeIndividualConditionRatings'
import { makeComplianceIssues } from './makeComplianceIssues'
import { makeMaintenanceIssues } from './makeMaintenanceIssues'
import { makeAreasAssessed } from './makeAreasAssessed'
import { makeReportNotes } from './makeReportNotes'
import { logo } from './logo'

export const makeDocDefinition = async (
  {
    inspectionNumber,
    cover,
    auditSummary,
    conditionRatings,
    complianceIssuesAdded,
    complianceIssues,
    maintenanceIssuesAdded,
    maintenanceIssues,
  },
  certificate
) => {
  const skipCommonHeaderFooter = certificate ? 2 : 1

  return {
    pageMargins,
    pageSize,
    header: makeHeader(skipCommonHeaderFooter),
    footer: makeFooter(skipCommonHeaderFooter),
    content: [
      await makeCertificate({
        certificate,
        inspectionNumber,
        cover,
        auditSummary,
        conditionRatings,
      }),
      makeCover(cover),
      await makeAuditSummary({ auditSummary, cover }),
      makeConditionRatingInfo(),
      makeIndividualConditionRatings(conditionRatings),
      makeComplianceIssues(complianceIssuesAdded, complianceIssues),
      makeMaintenanceIssues(maintenanceIssuesAdded, maintenanceIssues),
      makeAreasAssessed(),
      makeReportNotes(cover),
    ],
    images: {
      logo,
    },
  }
}
