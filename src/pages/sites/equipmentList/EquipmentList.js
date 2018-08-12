import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import { contextTypesTitle } from '../../../constants/'
import { showContentWhenLoaded } from '../../../functions/'
import { StyledEquipmentList } from './StyledEquipmentList'
import { onComponentDidMount } from './onComponentDidMount'

export class EquipmentList extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { equipmentsLoaded, equipments, match } = this.props
    const equipmentsAdded = equipments.length > 0

    return showContentWhenLoaded(
      equipmentsLoaded,
      <StyledEquipmentList className="StyledEquipmentList">
        <AddButton to={match.url + '/add'} pulse={!equipmentsAdded} />

        {equipmentsAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {equipments.map(({ equipment }) => (
                <StyledNavLink
                  key={equipment}
                  to={`${match.url}/edit/${equipment}`}
                >
                  <ListItem button divider>
                    <ListItemText primary={equipment} />
                  </ListItem>
                </StyledNavLink>
              ))}
            </List>
          </Paper>
        ) : (
          <EmptyListPlaceholder text="Try adding an equipment to get started!" />
        )}
      </StyledEquipmentList>
    )
  }
}

EquipmentList.contextTypes = contextTypesTitle
