import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { ClientList } from '../../../components/clientList/ClientList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
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
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a standard"
            className={clientsAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        <ClientList clients={clients} match={match} />
      </StyledClients>
    )
  }
}

Clients.contextTypes = contextTypesTitleLeftNavUnsubscriber
