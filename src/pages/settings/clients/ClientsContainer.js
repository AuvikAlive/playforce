import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Clients } from './Clients'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { ordered: { users = [] } },
}) => ({
  userId: uid,
  clients: users,
})

export const ClientsContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(Clients)
