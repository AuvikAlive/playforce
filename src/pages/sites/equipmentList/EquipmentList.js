import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledEquipmentList } from './StyledEquipmentList'

export class EquipmentList extends Component {
  componentDidMount() {
    const { equipmentsLoaded, fetchEquipments, userId, siteId } = this.props

    !equipmentsLoaded && fetchEquipments(userId, siteId)
  }

  render() {
    const { equipmentsLoaded, equipments, match } = this.props

    return equipmentsLoaded ? (
      <StyledEquipmentList className="StyledEquipmentList">
        <StyledNavLink to={match.url + '/addInspection'} className="add-icon">
          <Button variant="fab" color="primary" aria-label="add inspection">
            <AddIcon />
          </Button>
        </StyledNavLink>

        <Paper className="paper">
          <List component="nav" disablePadding>
            {equipments.length > 0 ? (
              equipments.map(({ id, equipment }) => (
                <ListItem key={id} button divider>
                  <ListItemText primary={equipment} />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="No equipments added" />
              </ListItem>
            )}
          </List>
        </Paper>
      </StyledEquipmentList>
    ) : (
      <LinearProgress />
    )
  }
}