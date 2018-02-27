import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { SignUp } from './SignUp'

export const SignUpContainer = compose(withRouter, withFirebase)(SignUp)
