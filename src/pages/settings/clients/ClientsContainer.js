import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Clients } from './Clients'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { data: { users } },
}) => ({
  userId: uid,
  clients:
    users && users[uid].clients && objectToArrayWithId(users[uid].clients),
})

export const ClientsContainer = compose(
  withFirestore,
  connect(mapStateToProps),
)(Clients)
