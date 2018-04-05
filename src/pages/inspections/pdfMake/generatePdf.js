// import vfsFonts from 'pdfmake/build/vfs_fonts'
// import pdfMake from 'pdfmake/build/pdfmake.js'
import {
  pageWidth,
  pageHeight,
  pageMarginHorizontal,
  pageMarginVertical,
  logoOffset,
} from './globals'
import { logo } from './logo'
import { makeFooter } from './makeFooter'
import { makeCover } from './makeCover'
import { makeAuditSummary } from './makeAuditSummary'
import { makeConditionRatingInfo } from './makeCondtionRatingInfo'
import { makeIndividualConditionRatings } from './makeIndividualConditionRatings'
import { makeComplianceIssues } from './makeComplianceIssues'
import { makeMaintenanceIssues } from './makeMaintenanceIssues'
import { makeAreasAssessed } from './makeAreasAssessed'
import { makeReportNotes } from './makeReportNotes'

export const generatePdf = async ({
  cover,
  auditSummary,
  conditionRatings,
  complianceIssuesAdded,
  complianceIssues,
  maintenanceIssuesAdded,
  maintenanceIssues,
}) => {
  const vfsFonts = await import('./vfs_fonts')
  const pdfMake = await import('pdfmake/build/pdfmake.min')

  const { vfs } = vfsFonts.pdfMake
  pdfMake.vfs = vfs

  pdfMake.fonts = {
    Roboto: {
      normal: 'Roboto-Regular.ttf',
      bold: 'Roboto-Medium.ttf',
      italics: 'Roboto-Italic.ttf',
      bolditalics: 'Roboto-MediumItalic.ttf',
    },
    Oswald: {
      normal: 'Oswald-Regular.ttf',
      bold: 'Oswald-Bold.ttf',
      italics: 'Oswald-Regular.ttf',
      bolditalics: 'Oswald-Bold.ttf',
    },
  }

  const docDefinition = {
    pageMargins: [
      pageMarginHorizontal,
      logoOffset,
      pageMarginHorizontal,
      pageMarginVertical,
    ],
    pageSize: { width: pageWidth, height: pageHeight },
    header: currentPage =>
      currentPage !== 1
        ? {
            image: logo,
            width: 208,
            marginTop: pageMarginVertical,
            marginLeft: pageMarginHorizontal,
          }
        : null,
    footer: (currentPage, pageCount) =>
      currentPage !== 1 ? makeFooter(currentPage, pageCount) : null,
    content: [
      makeCover(cover),
      await makeAuditSummary({ auditSummary, cover }),
      makeConditionRatingInfo(),
      makeIndividualConditionRatings(conditionRatings),
      makeComplianceIssues(complianceIssues, complianceIssuesAdded),
      makeMaintenanceIssues(maintenanceIssues, maintenanceIssuesAdded),
      makeAreasAssessed(),
      makeReportNotes(cover),
    ],
    images: {
      logo,
    },
  }

  return pdfMake.createPdf(docDefinition)
}
