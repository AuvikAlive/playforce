import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { SignIn } from './SignIn'

export const SignInContainer = compose(
  withErrorLoadingSubmit,
  withRouter,
  withFirebase
)(SignIn)
