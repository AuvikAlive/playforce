import PropTypes from 'prop-types'
import {
  contextTypesBottomNav,
  contextTypesTitleLeftRightNavUnsubscriber,
} from '../../../constants/'

export const childContextTypes = {
  enableNavBarShadow: PropTypes.func,
  disableNavBarShadow: PropTypes.func,
  setNavColor: PropTypes.func,
  ...contextTypesTitleLeftRightNavUnsubscriber,
  ...contextTypesBottomNav,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
  setSearchOnTop: PropTypes.func,
  setSearchOnBottom: PropTypes.func,
  openSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func,
  clearSubscriptions: PropTypes.func,
}
