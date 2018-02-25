import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { toggleSideMenu } from '../../store/actions/actionCreators';
import NavBar from './NavBar'

const mapStateToProps = ({ firebase: { profile } }) => ({ profile })

const mapDispatchToProps = { toggleSideMenu }

export default compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar)
