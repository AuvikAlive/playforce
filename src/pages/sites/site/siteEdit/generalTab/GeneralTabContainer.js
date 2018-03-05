import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { GeneralTab } from './GeneralTab'

const mapStateToProps = (state, props) => ({
  sites: state.firestore.ordered.sites,
})

export const GeneralTabContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(GeneralTab)
