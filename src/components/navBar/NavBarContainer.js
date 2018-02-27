import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { toggleSideMenu } from '../../store/actions/actionCreators/sideMenuActions'
import NavBar from './NavBar'

const mapStateToProps = ({
  firebase: { profile },
  searchBar: { open: searchBarOpen },
  router: { location: { state: routerState } },
}) => ({
  profile,
  searchBarOpen,
  routerState,
})

const mapDispatchToProps = { toggleSideMenu }

export const NavBarContainer = compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps),
)(NavBar)
