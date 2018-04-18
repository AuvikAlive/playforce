import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { signIn } from '../../store/actions/actionCreators/authActions/'
import { SignIn } from './SignIn'

const mapDispatchToProps = { signIn }

export const SignInContainer = compose(
  withErrorLoadingSubmit,
  withRouter,
  withFirebase,
  connect(null, mapDispatchToProps)
)(SignIn)
