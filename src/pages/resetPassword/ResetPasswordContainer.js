import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { ResetPassword } from './ResetPassword'

export const ResetPasswordContainer = compose(withFirebase)(ResetPassword)
