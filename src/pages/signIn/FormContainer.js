import { compose } from 'redux'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router'
import Form from './Form'

export default compose(withRouter, withFirebase)(Form)
