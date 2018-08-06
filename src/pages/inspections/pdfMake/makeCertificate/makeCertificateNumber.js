import { verticalMargin } from '../constants'

export const makeCertificateNumber = (
  inspectionNumber,
  customInspectionNumber,
  pageFontSize
) => ({
  text: `Certificate No.: ${customInspectionNumber || inspectionNumber}`,
  fontSize: pageFontSize,
  marginBottom: verticalMargin * 3,
  alignment: 'center',
})
