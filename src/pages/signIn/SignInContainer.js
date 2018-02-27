import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import { SignIn } from './SignIn'

export const SignInContainer = compose(withRouter, withFirebase)(SignIn)
