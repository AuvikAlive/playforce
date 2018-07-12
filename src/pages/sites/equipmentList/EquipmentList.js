import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
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

    return showContentWhenLoaded(
      equipmentsLoaded,
      <StyledEquipmentList className="StyledEquipmentList">
        <StyledNavLink to={match.url + '/add'} className="add-icon">
          <Button variant="fab" color="primary" aria-label="add inspection">
            <AddIcon />
          </Button>
        </StyledNavLink>

        <Paper className="paper">
          <List component="nav" disablePadding>
            {equipments.length > 0 ? (
              equipments.map(({ equipment }) => (
                <StyledNavLink
                  key={equipment}
                  to={`${match.url}/edit/${equipment}`}
                >
                  <ListItem button divider>
                    <ListItemText primary={equipment} />
                  </ListItem>
                </StyledNavLink>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No equipments added" />
              </ListItem>
            )}
          </List>
        </Paper>
      </StyledEquipmentList>
    )
  }
}

EquipmentList.contextTypes = contextTypesTitle
