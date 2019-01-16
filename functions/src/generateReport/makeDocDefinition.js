import { pageMargins } from './pageMargins'
import { pageSize } from './pageSize'
import { makeHeader } from './makeHeader'
import { makeFooter } from './makeFooter'
import { logo } from './logo'
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

export const makeDocDefinition = async requestBody => {
  const {
    reportPreferences,
    organisation,
    inspection,
    site,
    client,
    author,
    equipment,
    impactTest,
    issues,
  } = requestBody

  const { standards } = inspection

  const skipCommonHeaderFooter = 1

  const docDefinition = {
    pageMargins,
    pageSize,
    header: makeHeader(1),
    footer: makeFooter(
      skipCommonHeaderFooter,
      'Comprehensive Playground Inspection Report'
    ),
    images: {
      logo,
    },
    content: [
      await makeCover({
        reportPreferences,
        organisation,
        inspection,
        site,
        client,
        author,
      }),
      await makeAuditSummary(inspection.auditSummary, author, site),
      makeConditionRatingInfo(),
      await makeConditionRatings(equipment),
      makeImpactTests(impactTest, standards),
      await makeComplianceIssues(
        issues.filter(({ type }) => type === 'Compliance')
      ),
      await makeMaintenanceIssues(
        issues.filter(({ type }) => type === 'Maintenance')
      ),
      makeAreasAssessed(),
      makeImpactTestImages(impactTest.surfaces),
      makeReportNotes(standards),
    ],
  }

  return docDefinition
}
