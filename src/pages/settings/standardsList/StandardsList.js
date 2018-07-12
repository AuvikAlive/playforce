import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import { StyledStandardList } from './StyledStandardList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { onComponentDidMount } from './onComponentDidMount'

export class StandardsList extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }
  render() {
    const { match, standardsLoaded, standards } = this.props
    const standardsAdded = standards.length > 0

    return showContentWhenLoaded(
      standardsLoaded,
      <StyledStandardList className="StyledStandardList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a standard"
            className={standardsAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {standardsAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {standards.map(({ id, code, title, date }) => {
                return (
                  <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                    <ListItem button>
                      <ListItemText primary={`${title} ${code}`} />
                      <ListItemIcon>
                        <ModeEditIcon />
                      </ListItemIcon>
                    </ListItem>
                  </StyledNavLink>
                )
              })}
            </List>
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        )}
      </StyledStandardList>
    )
  }
}

StandardsList.contextTypes = contextTypesTitleLeftNavUnsubscriber
