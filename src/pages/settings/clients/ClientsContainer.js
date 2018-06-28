import { connect } from 'react-redux'
import { compose } from 'redux'
import { Clients } from './Clients'
import {
  saveClient,
  deleteClient,
  fetchClientsRealTime,
} from '../../../store/actions/actionCreators/clientActions/'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'

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
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Clients)
