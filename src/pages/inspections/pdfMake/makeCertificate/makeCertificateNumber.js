import { verticalMargin } from '../globals'

export const makeCertificateNumber = (inspectionNumber, pageFontSize) => ({
  text: `Certificate No.: ${inspectionNumber}`,
  fontSize: pageFontSize,
  marginBottom: verticalMargin * 3,
  alignment: 'center',
})
