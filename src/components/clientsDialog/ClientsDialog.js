import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import { contextTypesUnsubscriber } from '../../constants/'
import { showContentWhenLoaded } from '../../functions/'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { Content } from '../content/Content'
import { ClientList } from '../clientList/ClientList'
import { ClientFormContainer } from '../clientForm/ClientFormContainer'
import { onComponentDidMount, deleteClient } from './functions/'

export class ClientsDialog extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { clients, clientsLoaded, closeDialog } = this.props

    return showContentWhenLoaded(
      clientsLoaded,
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
              <ClientList clients={clients} deletePrompt={deleteClient(this)} />
              <ClientFormContainer />
            </Card>
          </Content>
        </StyledMainContent>
      </div>
    )
  }
}

ClientsDialog.contextTypes = contextTypesUnsubscriber
