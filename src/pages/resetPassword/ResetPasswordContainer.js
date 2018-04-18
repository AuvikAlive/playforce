import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { ResetPassword } from './ResetPassword'

export const ResetPasswordContainer = compose(
  withErrorLoadingSubmit,
  withFirebase
)(ResetPassword)
