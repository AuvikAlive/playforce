import { verticalMargin } from '../constants'

export const makeStandards = firstColumnWidth => {
  return {
    marginBottom: verticalMargin,
    columns: [
      {
        text: 'Applied Standard(s):',
        decoration: 'underline',
        bold: true,
        width: firstColumnWidth,
      },
      {
        text: 'AS 4422:2016',
      },
    ],
  }
}
