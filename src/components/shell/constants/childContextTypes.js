import PropTypes from 'prop-types'

export const childContextTypes = {
  enableNavBarShadow: PropTypes.func,
  disableNavBarShadow: PropTypes.func,
  setNavColor: PropTypes.func,
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
  setSearchOnTop: PropTypes.func,
  setSearchOnBottom: PropTypes.func,
  openSnackbar: PropTypes.func,
  closeSnackbar: PropTypes.func,
  addUnsubscriber: PropTypes.func,
  clearSubscriptions: PropTypes.func,
}
