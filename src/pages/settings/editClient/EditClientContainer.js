import { connect } from 'react-redux'
import { compose } from 'redux'
import { withDeleteDialog } from '../../../hocs/withDeleteDialog/withDeleteDialog'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import {
  fetchClient,
  updateClient,
  deleteClient,
} from '../../../store/actions/actionCreators/clientActions/'
import { EditClient } from './EditClient'

const mapStateToProps = (
  {
    firebase: {
      auth: { uid },
    },
    client: { clientsLoaded, clients, client },
  },
  {
    match: {
      params: { id },
    },
  }
) => ({
  userId: uid,
  clientId: id,
  client: (clientsLoaded && clients.find(item => item.id === id)) || client,
})

const mapDispatchToProps = { fetchClient, updateClient, deleteClient }

export const EditClientContainer = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditClient)
