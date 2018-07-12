import PropTypes from 'prop-types'

export const contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
  setSearchComponent: PropTypes.func,
  setNavColor: PropTypes.func,
  setSearchOnTop: PropTypes.func,
  setSearchOnBottom: PropTypes.func,
}
