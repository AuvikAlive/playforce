import PropTypes from 'prop-types'

export const contextTypes = {
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
  addUnsubscriber: PropTypes.func,
}
