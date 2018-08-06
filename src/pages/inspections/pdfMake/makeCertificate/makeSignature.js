import { trimImage } from '../../../../functions/trimImage'
import { verticalMargin } from '../constants'

export const makeSignature = async (
  pageFontSize,
  lineHeight,
  auditSummary,
  displayName
) => {
  const { signature, title, company } = auditSummary
  const trimmedSignature = await trimImage(signature)

  return [
    {
      image: trimmedSignature,
      width: 65,
      marginBottom: verticalMargin,
    },
    {
      fontSize: pageFontSize,
      text: displayName,
      bold: true,
      lineHeight,
    },
    {
      fontSize: pageFontSize,
      text: title,
      lineHeight,
    },
    {
      fontSize: pageFontSize,
      text: company,
      pageBreak: 'after',
      lineHeight,
    },
  ]
}
