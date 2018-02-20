import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import NavBar from './NavBar'

export default compose(
  withRouter,
  withFirebase,
  connect(({ firebase: { profile } }) => ({ profile }))
)(NavBar)
