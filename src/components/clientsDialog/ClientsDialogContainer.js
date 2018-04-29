import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  saveClient,
  deleteClient,
  fetchClientsRealTime,
} from '../../store/actions/actionCreators/clientActions/'
import { withDeleteModal } from '../../hocs/withDeleteDialog/withDeleteDialog'
import { ClientsDialog } from './ClientsDialog'

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

export const ClientsDialogContainer = compose(
  withDeleteModal,
  connect(mapStateToProps, mapDispatchToProps)
)(ClientsDialog)
