import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore, firestoreConnect } from 'react-redux-firebase'
import { AddSite } from './AddSite'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { ordered: { operators = [] } },
}) => ({
  userId: uid,
  operators,
})

export const AddSiteContainer = compose(
  withFirestore,
  firestoreConnect(() => [{ collection: 'operators' }]),
  connect(mapStateToProps),
)(AddSite)
