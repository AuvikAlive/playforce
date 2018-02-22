import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import SignUp from './SignUp'

export default compose(withRouter, withFirebase)(SignUp)
