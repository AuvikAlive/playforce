import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { signUp } from '../../store/actions/actionCreators/authActions/'
import { SignUp } from './SignUp'

const mapDispatchToProps = { signUp }

export const SignUpContainer = compose(
  withFeedback,
  withRouter,
  withFirebase,
  connect(null, mapDispatchToProps)
)(SignUp)
