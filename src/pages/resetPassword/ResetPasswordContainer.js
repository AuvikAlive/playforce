import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { sendPasswordResetEmail } from '../../store/actions/actionCreators/authActions/'
import { ResetPassword } from './ResetPassword'

const mapDispatchToProps = { sendPasswordResetEmail }

export const ResetPasswordContainer = compose(
  withErrorLoadingSubmit,
  withFirebase,
  connect(null, mapDispatchToProps)
)(ResetPassword)
