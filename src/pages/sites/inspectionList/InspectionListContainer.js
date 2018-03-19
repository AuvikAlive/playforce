import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { InspectionList } from './InspectionList'

const mapStateToProps = (
  { firestore: { ordered }, firebase: { auth: { uid } } },
  { match: { params: { id } } },
) => ({
  userId: uid,
  siteId: id,
  inspections: ordered && ordered[`users/${uid}/sites/${id}/inspections`],
})

export const InspectionListContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(InspectionList)
