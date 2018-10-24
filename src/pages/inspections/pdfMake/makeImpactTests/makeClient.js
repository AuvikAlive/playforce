import { verticalMargin } from '../constants'

export const makeClient = (firstColumnWidth, client) => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Client:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    {
      text: client,
    },
  ],
})
