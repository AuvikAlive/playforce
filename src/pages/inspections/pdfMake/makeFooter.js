import { pageMarginHorizontal } from './globals'

export const makeFooter = (currentPage, pageCount) => [
  {
    text: 'Comprehensive Playground Inspection Report',
    marginLeft: pageMarginHorizontal,
  },
  {
    text: `Page ${currentPage} of ${pageCount}`,
    marginLeft: pageMarginHorizontal,
  },
]
