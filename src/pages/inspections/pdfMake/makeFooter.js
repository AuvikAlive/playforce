import { pageMargin } from './globals'

export const makeFooter = (currentPage, pageCount) => [
  {
    text: 'Comprehensive Playground Inspection Report',
    marginLeft: pageMargin,
  },
  {
    text: `Page ${currentPage} of ${pageCount}`,
    marginLeft: pageMargin,
  },
]
