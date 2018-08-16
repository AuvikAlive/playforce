import { fontSize } from '../constants'
import { makeAddressHeader } from '../makeAddressHeader/'
import { makeTitle } from './makeTitle'
import { makeSubtitle } from './makeSubtitle'
import { makeCertificateNumber } from './makeCertificateNumber'
import { makeMiddleSection } from './makeMiddleSection'
import { makeDescription } from './makeDescription'
import { makeSignature } from './makeSignature'

export const makeCertificate = async ({
  certificate,
  defaultCertificateText,
  customCertificateText,
  inspectionNumber,
  customInspectionNumber,
  cover,
  auditSummary,
  signature,
  conditionRatings,
  name,
}) => {
  if (!certificate) {
    return null
  }

  const {
    location,
    client,
    clientAddress,
    inspectionDate,
    displayName,
    appliedStandards,
  } = cover

  const pageFontSize = fontSize + 2
  const lineHeight = 1.3

  return [
    makeAddressHeader(),
    makeTitle(),
    makeSubtitle(pageFontSize),
    makeCertificateNumber(
      inspectionNumber,
      customInspectionNumber,
      pageFontSize
    ),
    makeMiddleSection({
      pageFontSize,
      lineHeight,
      location,
      client,
      clientAddress,
      conditionRatings,
      appliedStandards,
      inspectionNumber,
      customInspectionNumber,
    }),
    makeDescription({
      pageFontSize,
      lineHeight,
      inspectionDate,
      defaultCertificateText,
      customCertificateText,
      name,
      client,
    }),
    await makeSignature({
      pageFontSize,
      lineHeight,
      auditSummary,
      signature,
      displayName,
    }),
  ]
}
