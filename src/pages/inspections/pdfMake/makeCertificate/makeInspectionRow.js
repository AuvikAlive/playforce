import { verticalMargin } from '../globals'

export const makeInspectionRow = (
  pageFontSize,
  firstColumnWidth,
  inspectionNumber
) => ({
  fontSize: pageFontSize,
  marginBottom: verticalMargin * 3,
  columns: [
    {
      text: 'Inspection Report',
      bold: true,
      italics: true,
      width: firstColumnWidth,
    },
    { text: ':', width: firstColumnWidth / 2 },
    { text: inspectionNumber, width: '*' },
  ],
})
