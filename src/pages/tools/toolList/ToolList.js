import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Content } from '../../../components/content/Content'
import { contextTypesTitle } from '../../../constants/'
import { onComponentDidMountWithTitle } from '../../../functions/'

export class ToolList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitle(this, 'Tools')
  }

  render() {
    return (
      <Content>
        <Paper className="paper">
          <List component="nav" disablePadding>
            <ListItem button>
              <ListItemText primary="Impact Area Extent Calculator" />
            </ListItem>
          </List>
        </Paper>
      </Content>
    )
  }
}

ToolList.contextTypes = contextTypesTitle
