import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore, firestoreConnect } from 'react-redux-firebase'
import { InspectionList } from './InspectionList'

const mapStateToProps = (
  { firestore: { data: { sites } } },
  { match: { params: { id } } },
) => ({
  site: sites && sites[id],
})

export const InspectionListContainer = compose(
  withFirestore,
  firestoreConnect(({ match: { params: { id } } }) => [
    { collection: 'sites', doc: id },
  ]),
  connect(mapStateToProps),
)(InspectionList)
