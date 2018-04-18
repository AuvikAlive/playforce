import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { SignUp } from './SignUp'

export const SignUpContainer = compose(
  withErrorLoadingSubmit,
  withRouter,
  withFirebase
)(SignUp)
