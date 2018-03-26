import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Clients } from './Clients'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { data: { users } },
}) => ({
  userId: uid,
  clients:
    users && users[uid].clients && objectToArrayWithId(users[uid].clients),
})

export const ClientsContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps),
)(Clients)
