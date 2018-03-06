import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { SiteDetail } from './SiteDetail'

const mapStateToProps = (
  { firestore: { data: { sites } } },
  { match: { params: { id } } },
) => ({
  site: sites[id],
})

export const SiteDetailContainer = compose(
  withRouter,
  withFirestore,
  connect(mapStateToProps),
)(SiteDetail)
