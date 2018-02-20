import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import NavBar from './NavBar'

export default compose(
  withRouter,
  withFirebase,
  connect(({ firebase: { profile } }) => ({ profile }))
)(NavBar)
