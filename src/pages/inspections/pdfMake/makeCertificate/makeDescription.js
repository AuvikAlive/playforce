import { format } from 'date-fns/esm'
import { verticalMargin } from '../constants'

export const makeDescription = (
  pageFontSize,
  inspectionDate,
  defaultCertificateText
) => ({
  fontSize: pageFontSize,
  marginBottom: verticalMargin * 3,
  text:
    defaultCertificateText ||
    `Based on our on-site assessment conducted on the ${format(
      inspectionDate,
      'DD MMMM YYYY'
    )}, Play Force Pty Ltd hereby certify that the items listed above were installed to meet the requirements of the applied standard(s). The certificate holder is authorized to use the certificate in connection with the attached report.`,
})
