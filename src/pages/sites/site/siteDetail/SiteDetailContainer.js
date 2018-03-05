import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { SiteDetail } from './SiteDetail'

const mapStateToProps = (state, props) => ({
  sites: state.firestore.ordered.sites,
})

export const SiteDetailContainer = compose(
  withRouter,
  withFirestore,
  connect(mapStateToProps),
)(SiteDetail)
