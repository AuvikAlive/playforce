import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirebase } from 'react-redux-firebase'
import { toggleSideMenu } from '../../store/actions/actionCreators/sideMenuActions'
import { openSearchBar } from '../../store/actions/actionCreators/searchBarActions'
import NavBar from './NavBar'

const mapStateToProps = ({
  firebase: { profile },
  searchBar: { open: searchBarOpen },
  router: { location: { state: { name: routeName } } }
}) => ({
  profile,
  searchBarOpen,
  routeName
})

const mapDispatchToProps = { toggleSideMenu, openSearchBar }

export const NavBarContainer = compose(
  withRouter,
  withFirebase,
  connect(mapStateToProps, mapDispatchToProps)
)(NavBar)
