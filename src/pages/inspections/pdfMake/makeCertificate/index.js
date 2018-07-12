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
  inspectionNumber,
  cover,
  auditSummary,
  conditionRatings,
}) => {
  if (!certificate) {
    return null
  }

  const {
    location,
    client,
    inspectionDate,
    displayName,
    appliedStandards,
  } = cover

  const pageFontSize = fontSize + 2

  return [
    makeAddressHeader(),
    makeTitle(),
    makeSubtitle(pageFontSize),
    makeCertificateNumber(inspectionNumber, pageFontSize),
    makeMiddleSection({
      pageFontSize,
      location,
      client,
      conditionRatings,
      appliedStandards,
      inspectionNumber,
    }),
    makeDescription(pageFontSize, inspectionDate),
    await makeSignature(pageFontSize, auditSummary, displayName),
  ]
}
