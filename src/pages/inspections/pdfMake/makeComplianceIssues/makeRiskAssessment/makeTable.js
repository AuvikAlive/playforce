import { makeFirstRow } from './makeFirstRow'
import { makeSecondRow } from './makeSecondRow'

export const makeTable = (probability, severity) => {
  const probabilityIndex = probability - 1
  const severityIndex = severity - 1

  return {
    colSpan: 2,
    layout: 'noBorders',
    alignment: 'center',
    table: {
      widths: ['*', '*', '*'],
      body: [makeFirstRow(), makeSecondRow(probabilityIndex, severityIndex)],
    },
  }
}
