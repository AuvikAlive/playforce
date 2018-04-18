import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { signUp } from '../../store/actions/actionCreators/authActions/'
import { SignUp } from './SignUp'

const mapDispatchToProps = { signUp }

export const SignUpContainer = compose(
  withErrorLoadingSubmit,
  withRouter,
  withFirebase,
  connect(null, mapDispatchToProps)
)(SignUp)
