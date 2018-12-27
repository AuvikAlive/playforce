import { format } from 'date-fns'
import { verticalMargin } from '../constants'

export const makeMiddleSectionThirdRow = ({
  sectionFontSize,
  firstColumnWidth,
  inspectionDate,
  displayName,
}) => ({
  fontSize: sectionFontSize,
  columns: [
    {
      text: 'INSPECTION DATE',
      bold: true,
      width: firstColumnWidth,
    },
    {
      text: format(inspectionDate, 'DD MMMM YYYY'),
      width: '*',
    },
    { text: 'INSPECTED BY', bold: true, width: 'auto' },
    {
      text: displayName,
      width: '*',
      marginLeft: 45,
    },
  ],
  marginTop: verticalMargin * 2,
})
