import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionList } from './InspectionList'

const mapStateToProps = (state, props) => ({
  sites: state.firestore.ordered.sites,
})

export const InspectionListContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(InspectionList)
