import { trimImage } from '../../../../utilities/trimImage'
import { verticalMargin } from '../globals'

export const makeSignature = async (
  pageFontSize,
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
    },
    {
      fontSize: pageFontSize,
      text: title,
    },
    {
      fontSize: pageFontSize,
      text: company,
      pageBreak: 'after',
    },
  ]
}
