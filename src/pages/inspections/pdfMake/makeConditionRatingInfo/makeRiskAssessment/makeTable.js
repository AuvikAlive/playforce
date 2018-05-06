import { verticalMargin } from '../../globals'
import { firstRow } from './firstRow'
import { secondRow } from './secondRow'
import { thirdRow } from './thirdRow'
import { fourthRow } from './fourthRow'
import { fifthRow } from './fifthRow'
import { sixthRow } from './sixthRow'
import { lastRow } from './lastRow'

export const makeTable = () => ({
  marginBottom: verticalMargin,
  alignment: 'center',
  table: {
    widths: ['auto', 'auto', '*', '*', '*', '*', '*'],
    body: [
      firstRow,
      secondRow,
      thirdRow,
      fourthRow,
      fifthRow,
      sixthRow,
      lastRow,
    ],
  },
})
