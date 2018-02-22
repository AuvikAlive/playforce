import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import SideMenu from './SideMenu'

export default compose(
  withRouter,
  withFirebase,
  connect(({ firebase: { auth } }) => ({ auth }))
)(SideMenu)
