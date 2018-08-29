import { connect } from 'react-redux'
import { compose } from 'redux'
import { Clients } from './Clients'
import { fetchClientsRealTime } from '../../../store/actions/actionCreators/clientActions/'

const mapStateToProps = ({ firebase, client }) => {
  const { clientsLoaded, clients } = client

  return {
    userId: firebase.auth.uid,
    clientsLoaded,
    clients,
  }
}

const mapDispatchToProps = { fetchClientsRealTime }

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)

export const ClientsContainer = enhance(Clients)
