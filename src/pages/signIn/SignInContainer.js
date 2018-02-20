import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import SignIn from './SignIn'

export default compose(withRouter, withFirebase)(SignIn)
