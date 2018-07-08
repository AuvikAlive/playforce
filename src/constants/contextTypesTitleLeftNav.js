import PropTypes from 'prop-types'
import { contextTypesTitle } from './contextTypesTitle'

export const contextTypesTitleLeftNav = {
  ...contextTypesTitle,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
