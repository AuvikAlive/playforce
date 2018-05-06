import { makeFirstRow } from './makeFirstRow'
import { makeSecondRow } from './makeSecondRow'
import { makeThirdRow } from './makeThirdRow'
import { makeFourthRow } from './makeFourthRow'

export const makeAddress = () => ({
  layout: 'noBorders',
  marginLeft: 110,
  table: {
    body: [makeFirstRow(), makeSecondRow(), makeThirdRow(), makeFourthRow()],
  },
})
