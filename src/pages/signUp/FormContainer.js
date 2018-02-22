import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import Form from './Form'

export default compose(withRouter, withFirebase)(Form)
