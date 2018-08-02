import { pageMargins } from './pageMargins'
import { pageSize } from './pageSize'
import { makeHeader } from './makeHeader'
import { makeFooter } from './makeFooter'
import { makeCertificate } from './makeCertificate/'
import { makeCover } from './makeCover/'
import { makeAuditSummary } from './makeAuditSummary'
import { makeConditionRatingInfo } from './makeConditionRatingInfo/'
import { makeConditionRatings } from './makeConditionRatings/'
import { makeImpactTests } from './makeImpactTests/'
import { makeComplianceIssues } from './makeComplianceIssues/'
import { makeMaintenanceIssues } from './makeMaintenanceIssues/'
import { makeAreasAssessed } from './makeAreasAssessed/'
import { makeImpactTestImages } from './makeImpactTestImages/'
import { makeReportNotes } from './makeReportNotes/'
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
    impactGeneralInfo,
    impactTests,
    certificate,
    customCertificateText,
  },
  defaultCertificateText
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
        defaultCertificateText,
        customCertificateText,
        inspectionNumber,
        cover,
        auditSummary,
        conditionRatings,
      }),
      makeCover(cover),
      await makeAuditSummary({ auditSummary, cover }),
      makeConditionRatingInfo(),
      makeConditionRatings(conditionRatings),
      makeImpactTests(impactGeneralInfo, impactTests, cover.appliedStandards),
      makeComplianceIssues(complianceIssuesAdded, complianceIssues),
      makeMaintenanceIssues(maintenanceIssuesAdded, maintenanceIssues),
      makeAreasAssessed(),
      makeImpactTestImages(impactTests),
      makeReportNotes(cover),
    ],
    images: {
      logo,
    },
  }
}
