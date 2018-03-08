import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { AddInspection } from './AddInspection'

const mapStateToProps = (
  { firestore: { data: { sites } } },
  { match: { params: { id } } },
) => ({
  id,
  site: sites && sites[id],
})

export const AddInspectionContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(AddInspection)
