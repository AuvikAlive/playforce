import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import { ClientList } from '../../settings/clients/ClientList'
import { FormContainer } from '../../settings/clients/FormContainer'
import { StyledClients } from '../../settings/clients/StyledClients'
import NavBar from '../../../components/navBar/'
import { StyledMainContent } from '../../../components/shell/StyledMainContent'

export class Clients extends Component {
  componentDidMount() {
    const { userId, clientsLoaded, fetchClientsRealTime } = this.props

    !clientsLoaded && fetchClientsRealTime(userId)
  }

  delete = async id => {
    const { openModal, deleteClient, userId } = this.props
    openModal(() => deleteClient(userId, id))
  }

  render() {
    const { clients, clientsLoaded, closeDialog } = this.props

    return clientsLoaded ? (
      <div>
        <NavBar
          title="Clients"
          leftComponent={
            <IconButton
              color="inherit"
              aria-label="Search"
              onClick={closeDialog}
            >
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <StyledMainContent>
          <StyledClients className="StyledClients">
            <Card className="card">
              <ClientList clients={clients} deletePrompt={this.delete} />
              <FormContainer />
            </Card>
          </StyledClients>
        </StyledMainContent>
      </div>
    ) : (
      <LinearProgress />
    )
  }
}
