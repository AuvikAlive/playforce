import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import { ClientList } from './ClientList'
import { FormContainer } from './FormContainer'
import { StyledClients } from './StyledClients'

export class Clients extends Component {
  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, userId, clientsLoaded, fetchClientsRealTime } = this.props

    setNavTitle('Clients')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !clientsLoaded && fetchClientsRealTime(userId)
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
          <FormContainer />
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
}
