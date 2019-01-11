import { format } from 'date-fns'
import { verticalMargin } from '../constants'

export const makeDate = (firstColumnWidth, inspectionDate) => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Date of Testing:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    {
      text: format(inspectionDate, 'DD MMMM YYYY'),
    },
  ],
})
