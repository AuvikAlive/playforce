import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import {
  signIn,
  signInWithProvider,
} from '../../store/actions/actionCreators/authActions/'
import { SignIn } from './SignIn'

const mapDispatchToProps = { signIn, signInWithProvider }

export const SignInContainer = compose(
  withFeedback,
  withRouter,
  withFirebase,
  connect(null, mapDispatchToProps)
)(SignIn)
