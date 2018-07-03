import { verticalMargin } from '../constants'

export const makeApparatus = (firstColumnWidth, { apparatus }) => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Test Apparatus:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    {
      text: apparatus,
    },
  ],
})
