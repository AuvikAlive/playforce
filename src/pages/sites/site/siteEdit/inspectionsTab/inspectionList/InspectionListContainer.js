import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionList } from './InspectionList'

const mapStateToProps = (
  { firestore: { data: { sites } } },
  { match: { params: { id } } },
) => ({
  site: sites[id],
})

export const InspectionListContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(InspectionList)
