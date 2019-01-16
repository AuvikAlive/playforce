import { makeFirstRow } from './makeFirstRow'
import { makeSecondRow } from './makeSecondRow'

export const makeTable = (...args) => {
  return {
    colSpan: 2,
    layout: 'noBorders',
    alignment: 'center',
    table: {
      widths: ['*', '*', '*'],
      body: [makeFirstRow(), makeSecondRow(...args)],
    },
  }
}
