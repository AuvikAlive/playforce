import { verticalMargin } from '../globals'
import { makeDropHeader } from './makeDropHeader'
import { makeDropRows } from './makeDropRows'

export const makeDrops = (marginLeft, dropTests) => ({
  layout: 'noBorders',
  marginLeft,
  marginBottom: verticalMargin * 2,
  alignment: 'center',
  unbreakable: true,
  table: {
    widths: ['*', 150, '*', '*', '*', '*', 100],
    body: [makeDropHeader(), ...makeDropRows(dropTests)],
  },
})
