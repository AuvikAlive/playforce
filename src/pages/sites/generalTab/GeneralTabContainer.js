import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router'
import { withFirestore, firestoreConnect } from 'react-redux-firebase'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = (
  { firestore: { data: { sites } } },
  { match: { params: { id } } },
) => ({
  site: sites && sites[id],
})

export const GeneralTabContainer = compose(
  withRouter,
  withFirestore,
  firestoreConnect(({ match: { params: { id } } }) => [
    { collection: 'sites', doc: id },
  ]),
  connect(mapStateToProps),
)(GeneralTab)
