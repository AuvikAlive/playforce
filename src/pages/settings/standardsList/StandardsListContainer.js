import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { StandardsList } from './StandardsList'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { ordered: { users } },
}) => ({
  uid,
  standards: users,
})

export const StandardsListContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(StandardsList)
