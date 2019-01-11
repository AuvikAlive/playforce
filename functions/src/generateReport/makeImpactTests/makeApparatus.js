import { verticalMargin } from '../constants'

export const makeApparatus = (firstColumnWidth, { testApparatus }) => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Test Apparatus:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    {
      text: testApparatus,
    },
  ],
})
