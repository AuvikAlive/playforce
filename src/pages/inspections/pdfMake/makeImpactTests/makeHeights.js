import { verticalMargin } from '../globals'
import { makeFreeHeight } from './makeFreeHeight'
import { makeMeasuredHeight } from './makeMeasuredHeight'
import { makeCriticalHeight } from './makeCriticalHeight'

export const makeHeights = firstColumnWidth => ({
  marginBottom: verticalMargin,
  columns: [
    {
      text: 'Height Definitions:',
      decoration: 'underline',
      bold: true,
      width: firstColumnWidth,
    },
    [makeFreeHeight(), makeMeasuredHeight(), makeCriticalHeight()],
  ],
})
