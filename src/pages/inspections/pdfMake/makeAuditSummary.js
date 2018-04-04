import { verticalMargin, headerFontSize } from './globals'
import { trimImage } from '../../../utilities/trimImage'

export const makeAuditSummary = async ({ auditSummary, cover }) => {
  const { summary, signature, displayName, title, company } = auditSummary

  const trimmedSignature = await trimImage(signature)

  return [
    {
      text: 'AUDIT SUMMARY',
      font: 'Oswald',
      // bold: true,
      fontSize: headerFontSize,
      marginBottom: verticalMargin * 2,
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
