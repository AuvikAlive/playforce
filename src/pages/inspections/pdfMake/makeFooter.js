import { pageMarginHorizontal } from './globals'

export const makeFooter = skipCommonHeaderFooter => (currentPage, pageCount) =>
  currentPage > skipCommonHeaderFooter
    ? [
        {
          text: 'Comprehensive Playground Inspection Report',
          marginLeft: pageMarginHorizontal,
        },
        {
          text: `Page ${currentPage} of ${pageCount}`,
          marginLeft: pageMarginHorizontal,
        },
      ]
    : null
