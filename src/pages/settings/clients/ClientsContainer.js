import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Clients } from './Clients'
import {
  saveClient,
  deleteClient,
  fetchClientsRealTime,
} from '../../../store/actions/actionCreators/clientActions/'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
  },
  firestore: {
    data: { users },
  },
  client: { clientsLoaded, clients },
}) => ({
  userId: uid,
  clientsLoaded,
  clients,
})

const mapDispatchToProps = { saveClient, deleteClient, fetchClientsRealTime }

export const ClientsContainer = compose(
  withDeleteModal,
  withFeedback,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps)
)(Clients)
