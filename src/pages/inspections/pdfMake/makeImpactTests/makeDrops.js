import { verticalMargin, lightGray } from '../constants'
import { makeDropHeader } from './makeDropHeader'
import { makeDropRows } from './makeDropRows'

const lighterGray = '#efefef'

export const makeDrops = (marginLeft, dropTests) => ({
  layout: {
    hLineWidth: () => 0,
    vLineWidth: () => 0,
    fillColor: function(i, node) {
      if (i === 0) {
        return lightGray
      } else if (i !== 1 && i % 2 === 0) {
        return lighterGray
      } else {
        return null
      }
    },
  },
  marginLeft,
  marginBottom: verticalMargin * 2,
  alignment: 'center',
  unbreakable: true,
  table: {
    widths: ['*', 150, '*', '*', '*', '*', 100],
    body: [makeDropHeader(), ...makeDropRows(dropTests)],
  },
})
