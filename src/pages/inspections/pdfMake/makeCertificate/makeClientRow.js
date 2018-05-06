import { verticalMargin } from '../globals'

export const makeClientRow = (pageFontSize, firstColumnWidth, client) => ({
  fontSize: pageFontSize,
  marginBottom: verticalMargin * 3,
  columns: [
    {
      text: 'Client',
      bold: true,
      italics: true,
      width: firstColumnWidth,
    },
    { text: ':', width: firstColumnWidth / 2 },
    { text: client, width: '*' },
  ],
})
