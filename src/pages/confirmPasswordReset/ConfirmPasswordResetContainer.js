import { compose } from 'redux'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { confirmPasswordReset } from '../../store/actions/actionCreators/passwordResetActions/'
import { ConfirmPasswordReset } from './ConfirmPasswordReset'

const mapDispatchToProps = { confirmPasswordReset }

export const ConfirmPasswordResetContainer = compose(
  withErrorLoadingSubmit,
  withFirebase,
  connect(null, mapDispatchToProps)
)(ConfirmPasswordReset)
