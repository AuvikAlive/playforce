import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { ConfirmPasswordReset } from './ConfirmPasswordReset'

export const ConfirmPasswordResetContainer = compose(withFirebase)(
  ConfirmPasswordReset,
)
