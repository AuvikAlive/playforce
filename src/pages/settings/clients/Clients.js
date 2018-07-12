import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import { ClientList } from '../../../components/clientList/ClientList'
import { ClientFormContainer } from '../../../components/clientForm/ClientFormContainer'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { StyledClients } from './StyledClients'
import { onComponentDidMount, deleteClient } from './functions/'

export class Clients extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { clients, clientsLoaded } = this.props

    return showContentWhenLoaded(
      clientsLoaded,
      <StyledClients className="StyledClients">
        <Card className="card">
          <ClientList clients={clients} deletePrompt={deleteClient(this)} />
          <ClientFormContainer />
        </Card>
      </StyledClients>
    )
  }
}

Clients.contextTypes = contextTypesTitleLeftNavUnsubscriber
