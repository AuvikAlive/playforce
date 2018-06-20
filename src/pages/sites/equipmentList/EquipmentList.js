import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledEquipmentList } from './StyledEquipmentList'

export class EquipmentList extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context
    const { equipmentsSite, fetchEquipments, userId, siteId } = this.props

    setNavTitle('Edit Site')
    equipmentsSite !== siteId && fetchEquipments(userId, siteId)
  }

  render() {
    const { equipmentsLoaded, equipments, match } = this.props

    return equipmentsLoaded ? (
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
                  to={`${match.url}/${equipment}/edit`}
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
    ) : (
      <LinearProgress />
    )
  }
}

EquipmentList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
