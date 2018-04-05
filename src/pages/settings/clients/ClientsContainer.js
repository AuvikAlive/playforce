import { connect } from 'react-redux'
import { compose } from 'redux'
import { withFirestore } from 'react-redux-firebase'
import { Clients } from './Clients'
import { fetchClients } from '../../../store/actions/actionCreators/clientActions'
import { withErrorLoadingSubmit } from '../../../hocs/withErrorLoadingSubmit/withErrorLoadingSubmit'
import { withDeleteModal } from '../../../hocs/withDeleteModal/withDeleteModal'

const mapStateToProps = ({
  firebase: { auth: { uid } },
  firestore: { data: { users } },
  client: { clientsLoaded, clients },
}) => ({
  userId: uid,
  clientsLoaded,
  clients,
})

const mapDispatchToProps = { fetchClients }

export const ClientsContainer = compose(
  withDeleteModal,
  withErrorLoadingSubmit,
  withFirestore,
  connect(mapStateToProps, mapDispatchToProps),
)(Clients)
