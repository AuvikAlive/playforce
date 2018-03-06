import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore } from 'react-redux-firebase'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = (
  { firestore: { data: { sites } } },
  { match: { params: { id } } },
) => ({
  site: sites[id],
})

export const GeneralTabContainer = compose(
  withRouter,
  withFirestore,
  connect(mapStateToProps),
)(GeneralTab)
