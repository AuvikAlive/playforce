import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  saveClient,
  deleteClient,
  fetchClientsRealTime,
} from '../../../store/actions/actionCreators/clientActions/'
import { withDeleteModal } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { Clients } from './Clients'

const mapStateToProps = ({
  firebase: {
    auth: { uid },
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
  connect(mapStateToProps, mapDispatchToProps)
)(Clients)
