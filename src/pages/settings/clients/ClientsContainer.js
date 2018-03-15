import { connect } from 'react-redux'
import { compose } from 'redux'
import { Clients } from './Clients'

const mapStateToProps = ({ firebase: { profile } }) => ({
  profile,
})

export const ClientsContainer = compose(connect(mapStateToProps))(Clients)
