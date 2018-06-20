import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { Content } from '../content/Content'
import { ClientList } from '../clientList/ClientList'
import { ClientFormContainer } from '../clientForm/ClientFormContainer'

export class ClientsDialog extends Component {
  async componentDidMount() {
    const { userId, clientsLoaded, fetchClientsRealTime } = this.props
    const { addUnsubscriber } = this.context

    !clientsLoaded && addUnsubscriber(await fetchClientsRealTime(userId))
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

ClientsDialog.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
