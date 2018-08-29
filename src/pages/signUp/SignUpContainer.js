import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFeedback } from '../../hocs/withFeedback/withFeedback'
import { signUp } from '../../store/actions/actionCreators/authActions/'
import { SignUp } from './SignUp'

const mapDispatchToProps = { signUp }

const enhance = compose(
  withFeedback,
  connect(
    null,
    mapDispatchToProps
  )
)

export const SignUpContainer = enhance(SignUp)
