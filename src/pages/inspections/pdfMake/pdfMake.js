import vfsFonts from 'pdfmake/build/vfs_fonts'
import pdfMake from 'pdfmake/build/pdfmake.js'
import { pageWidth, pageHeight } from './globals'
import { makeCover } from './makeCover'
import { makeAuditSummary } from './makeAuditSummary'
import { makeConditionRatingInfo } from './makeCondtionRatingInfo'
import { makeIndividualConditionRatings } from './makeIndividualConditionRatings'

const { vfs } = vfsFonts.pdfMake
pdfMake.vfs = vfs

export const generatePdf = ({ cover, auditSummary, conditionRatings }) => {
  const docDefinition = {
    content: [
      makeCover(cover),
      makeAuditSummary({ auditSummary, cover }),
      makeConditionRatingInfo(),
      makeIndividualConditionRatings(conditionRatings),
    ],
    pageSize: { width: pageWidth, height: pageHeight },
  }

  return pdfMake.createPdf(docDefinition)
}
