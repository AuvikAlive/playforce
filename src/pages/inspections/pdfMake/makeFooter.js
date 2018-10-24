import { pageMarginHorizontal } from './constants'

export const makeFooter = (skipCommonHeaderFooter, title) => (
  currentPage,
  pageCount
) =>
  currentPage > skipCommonHeaderFooter
    ? [
        {
          text: title,
          marginLeft: pageMarginHorizontal,
        },
        {
          text: `Page ${currentPage} of ${pageCount}`,
          marginLeft: pageMarginHorizontal,
        },
      ]
    : null
