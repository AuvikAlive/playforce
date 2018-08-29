import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import {
  signIn,
  signInWithProvider,
} from '../../store/actions/actionCreators/authActions/'
import { SignIn } from './SignIn'

const mapDispatchToProps = { signIn, signInWithProvider }

const enhance = compose(
  withFeedback,
  connect(
    null,
    mapDispatchToProps
  )
)

export const SignInContainer = enhance(SignIn)
