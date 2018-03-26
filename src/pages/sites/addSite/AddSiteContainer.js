import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { AddSite } from './AddSite'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { ordered: { users = [] } },
}) => ({
  userId: uid,
  operators: users,
})

export const AddSiteContainer = compose(
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(AddSite)
