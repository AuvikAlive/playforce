import { verticalMargin } from '../constants'

export const makeMethod = firstColumnWidth => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Test Method:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    {
      text:
        'The on-site testing was conducted in accordance with the test method provided in applied standard(s).',
    },
  ],
})
