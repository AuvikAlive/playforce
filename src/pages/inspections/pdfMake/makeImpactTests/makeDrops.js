import { verticalMargin } from '../globals'
import { makeDropHeader } from './makeDropHeader'
import { makeDropRows } from './makeDropRows'

export const makeDrops = (marginLeft, dropTests) => ({
  layout: 'noBorders',
  marginLeft,
  marginBottom: verticalMargin,
  alignment: 'center',
  unbreakable: true,
  table: {
    widths: ['*', '*', '*', '*', '*', '*', '*'],
    body: [makeDropHeader(), ...makeDropRows(dropTests)],
  },
})
