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
    customInspectionNumber,
    name,
    signature,
    playgroundsCompleted,
    playgrounds,
  },
  defaultCertificateText,
  reportNotes
) => {
  const skipCommonHeaderFooter = certificate ? 2 : 1

  return {
    pageMargins,
    pageSize,
    header: makeHeader(skipCommonHeaderFooter),
    footer: makeFooter(
      skipCommonHeaderFooter,
      'Comprehensive Playground Inspection Report'
    ),
    content: [
      await makeCertificate({
        certificate,
        defaultCertificateText,
        customCertificateText,
        inspectionNumber,
        customInspectionNumber,
        cover,
        auditSummary,
        signature,
        conditionRatings,
        name,
      }),
      makeCover(cover),
      await makeAuditSummary(auditSummary, cover, signature),
      makeConditionRatingInfo(),
      makeConditionRatings(conditionRatings, playgroundsCompleted, playgrounds),
      makeImpactTests(impactGeneralInfo, impactTests, cover.appliedStandards),
      makeComplianceIssues({
        complianceIssuesAdded,
        complianceIssues,
        playgroundsCompleted,
        playgrounds,
      }),
      makeMaintenanceIssues({
        maintenanceIssuesAdded,
        maintenanceIssues,
        playgroundsCompleted,
        playgrounds,
      }),
      makeAreasAssessed(),
      makeImpactTestImages(impactTests),
      makeReportNotes(cover, reportNotes),
    ],
    images: {
      logo,
    },
  }
}
