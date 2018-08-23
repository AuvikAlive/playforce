import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { Content } from '../../../components/content/Content'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'

export class PlaygroundItems extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, this.props.playground.name)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, playground } = this.props
    const {
      complianceIssuesAdded,
      conditionRatingsAdded,
      maintenanceIssuesAdded,
    } = playground

    return (
      <Content>
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/conditionRating`}>
              <ListItem button>
                <ListItemText primary="Condition Rating" />
                {conditionRatingsAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/complianceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Compliance Issues" />
                {complianceIssuesAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/maintenanceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Maintenance Issues" />
                {maintenanceIssuesAdded && <CheckCircleIcon color="primary" />}
              </ListItem>
            </StyledNavLink>
          </List>
        </Paper>
      </Content>
    )
  }
}

PlaygroundItems.contextTypes = contextTypesTitleLeftNav