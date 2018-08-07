import React, { Component } from 'react'
import { ClientList } from '../../../components/clientList/ClientList'
import { AddButton } from '../../../components/addButton/AddButton'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { StyledClients } from './StyledClients'
import { onComponentDidMount } from './onComponentDidMount'

export class Clients extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { clients, clientsLoaded, match } = this.props
    const clientsAdded = clients.length > 0

    return showContentWhenLoaded(
      clientsLoaded,
      <StyledClients className="StyledClients">
        <AddButton to={`${match.url}/add`} pulse={!clientsAdded} />
        <ClientList clients={clients} match={match} />
      </StyledClients>
    )
  }
}

Clients.contextTypes = contextTypesTitleLeftNavUnsubscriber
