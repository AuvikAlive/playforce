import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { Content } from '../content/Content'
import { ClientList } from '../clientList/ClientList'
import { ClientFormContainer } from '../clientForm/ClientFormContainer'

export class ClientsDialog extends Component {
  componentDidMount() {
    const { userId, clientsLoaded, fetchClientsRealTime } = this.props

    !clientsLoaded && fetchClientsRealTime(userId)
  }

  delete = async id => {
    const { openDialog, deleteClient, userId } = this.props
    openDialog(() => deleteClient(userId, id))
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
              aria-label="close"
              onClick={closeDialog}
            >
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <StyledMainContent className="StyledMainContent">
          <Content>
            <Card className="card">
              <ClientList clients={clients} deletePrompt={this.delete} />
              <ClientFormContainer />
            </Card>
          </Content>
        </StyledMainContent>
      </div>
    ) : (
      <LinearProgress />
    )
  }
}
