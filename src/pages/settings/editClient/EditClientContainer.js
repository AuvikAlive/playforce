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

const mapStateToProps = ({ firebase, client }, { match }) => {
  const { clientsLoaded, clients } = client
  const clientId = match.params.id

  return {
    userId: firebase.auth.uid,
    clientId,
    client:
      (clientsLoaded && clients.find(item => item.id === clientId)) ||
      client.client,
  }
}

const mapDispatchToProps = { fetchClient, updateClient, deleteClient }

const enhance = compose(
  withFeedback,
  withDeleteDialog,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const EditClientContainer = enhance(EditClient)
