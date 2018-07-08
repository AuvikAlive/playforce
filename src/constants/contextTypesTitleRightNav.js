import PropTypes from 'prop-types'
import { contextTypesTitle } from './contextTypesTitle'

export const contextTypesTitleRightNav = {
  ...contextTypesTitle,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
