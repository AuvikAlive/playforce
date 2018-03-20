import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore, firestoreConnect } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { AddSite } from './AddSite'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { ordered: { operators = [] } },
}) => ({
  userId: uid,
  operators,
})

export const AddSiteContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  firestoreConnect(() => [{ collection: 'operators' }]),
  connect(mapStateToProps),
)(AddSite)
