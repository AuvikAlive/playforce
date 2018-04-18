import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { ConfirmPasswordReset } from './ConfirmPasswordReset'

export const ConfirmPasswordResetContainer = compose(
  withErrorLoadingSubmit,
  withFirebase
)(ConfirmPasswordReset)
