import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import { ClientList } from '../../../components/clientList/ClientList'
import { ClientFormContainer } from '../../../components/clientForm/ClientFormContainer'
import { StyledClients } from './StyledClients'

export class Clients extends Component {
  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent, addUnsubscriber } = this.context
    const { history, userId, clientsLoaded, fetchClientsRealTime } = this.props

    setNavTitle('Clients')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !clientsLoaded && addUnsubscriber(await fetchClientsRealTime(userId))
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  delete = async id => {
    const { openDialog, deleteClient, userId } = this.props
    openDialog(() => deleteClient(userId, id))
  }

  render() {
    const { clients, clientsLoaded } = this.props

    return clientsLoaded ? (
      <StyledClients className="StyledClients">
        <Card className="card">
          <ClientList clients={clients} deletePrompt={this.delete} />
          <ClientFormContainer />
        </Card>
      </StyledClients>
    ) : (
      <LinearProgress />
    )
  }
}

Clients.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
