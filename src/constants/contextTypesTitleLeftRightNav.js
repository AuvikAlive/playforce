import PropTypes from 'prop-types'
import { contextTypesTitleLeftNav } from './contextTypesTitleLeftNav'

export const contextTypesTitleLeftRightNav = {
  ...contextTypesTitleLeftNav,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
