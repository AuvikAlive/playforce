import { verticalMargin, headerFontSize } from './globals'

export const makeAuditSummary = ({ auditSummary, cover }) => {
  const { summary, signature, displayName, title, company } = auditSummary

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
      image: signature,
      width: 90,
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
