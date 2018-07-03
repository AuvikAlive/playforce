import { logo } from './logo'
import { pageMarginHorizontal, pageMarginVertical } from './constants'

export const makeHeader = skipCommonHeaderFooter => currentPage =>
  currentPage > skipCommonHeaderFooter
    ? {
        image: logo,
        width: 208,
        marginTop: pageMarginVertical,
        marginLeft: pageMarginHorizontal,
      }
    : null
