import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { closeSideMenu } from '../../store/actions/actionCreators'
import SideMenu from './SideMenu'

const mapStateToProps = ({ firebase: { auth }, sideMenu: { open } }) => ({
  auth,
  open
})

const mapDispatchToProps = { closeSideMenu }

export const SideMenuContainer = compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(SideMenu)
