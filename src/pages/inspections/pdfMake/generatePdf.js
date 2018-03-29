import vfsFonts from 'pdfmake/build/vfs_fonts'
import pdfMake from 'pdfmake/build/pdfmake.js'
import { pageWidth, pageHeight } from './globals'
import { makeCover } from './makeCover'
import { makeAuditSummary } from './makeAuditSummary'
import { makeConditionRatingInfo } from './makeCondtionRatingInfo'
import { makeIndividualConditionRatings } from './makeIndividualConditionRatings'
import { makeComplianceIssues } from './makeComplianceIssues'
import { makeMaintenanceIssues } from './makeMaintenanceIssues'
import { makeAreasAssessed } from './makeAreasAssessed'
import { makeReportNotes } from './makeReportNotes'

const { vfs } = vfsFonts.pdfMake
pdfMake.vfs = vfs

export const generatePdf = ({
  cover,
  auditSummary,
  conditionRatings,
  complianceIssuesAdded,
  complianceIssues,
  maintenanceIssuesAdded,
  maintenanceIssues,
}) => {
  const docDefinition = {
    content: [
      makeCover(cover),
      makeAuditSummary({ auditSummary, cover }),
      makeConditionRatingInfo(),
      makeIndividualConditionRatings(conditionRatings),
      complianceIssuesAdded ? makeComplianceIssues(complianceIssues) : null,
      maintenanceIssuesAdded ? makeMaintenanceIssues(maintenanceIssues) : null,
      makeAreasAssessed(),
      makeReportNotes(cover),
    ],
    pageSize: { width: pageWidth, height: pageHeight },
  }

  return pdfMake.createPdf(docDefinition)
}
