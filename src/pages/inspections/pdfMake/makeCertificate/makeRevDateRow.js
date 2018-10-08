import { format } from 'date-fns'

const date = new Date()

export const makeRevDateRow = (
  pageFontSize,
  firstColumnWidth,
  marginBottom
) => ({
  fontSize: pageFontSize,
  marginBottom,
  columns: [
    {
      text: 'Rev. Date',
      bold: true,
      italics: true,
      width: firstColumnWidth,
    },
    { text: ':', width: pageFontSize },
    { text: format(date, 'DD MMMM YYYY'), width: '*' },
  ],
})
