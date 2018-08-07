import { connect } from 'react-redux'
import { compose } from 'redux'
import { Clients } from './Clients'
import { fetchClientsRealTime } from '../../../store/actions/actionCreators/clientActions/'

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

const mapDispatchToProps = { fetchClientsRealTime }

export const ClientsContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Clients)
