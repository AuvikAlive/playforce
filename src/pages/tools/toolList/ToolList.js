import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Content } from '../../../components/content/Content'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitle } from '../../../constants/'
import { onComponentDidMountWithTitle } from '../../../functions/'

export class ToolList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitle(this, 'Tools')
  }

  render() {
    const { match } = this.props

    return (
      <Content>
        <Paper className="paper">
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/impactAreaExtent`}>
              <ListItem button>
                <ListItemText primary="Impact Area Extent Calculator" />
              </ListItem>
            </StyledNavLink>
          </List>
        </Paper>
      </Content>
    )
  }
}

ToolList.contextTypes = contextTypesTitle
