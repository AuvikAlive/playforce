import { verticalMargin, headerFontSize } from './constants'
import { trimImage } from '../../../functions/'

export const makeAuditSummary = async (auditSummary, cover, signature) => {
  const { summary, displayName, title, company } = auditSummary
  const trimmedSignature = await trimImage(signature)

  return [
    {
      text: 'AUDIT SUMMARY',
      font: 'Oswald',
      // bold: true,
      fontSize: headerFontSize,
      marginBottom: verticalMargin,
    },
    {
      text: summary,
      marginBottom: verticalMargin * 3,
    },
    {
      image: trimmedSignature,
      width: 65,
      marginBottom: verticalMargin,
    },
    {
      text: displayName,
      bold: true,
    },
    {
      text: title,
    },
    {
      text: company,
      pageBreak: 'after',
    },
  ]
}
