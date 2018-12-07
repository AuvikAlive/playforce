import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Content } from '../../../components/content/Content'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'

export class PlayingSurfaceList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Playing Surfaces')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, playingSurfaces } = this.props
    const playingSurfacesAdded = playingSurfaces.length > 0

    return (
      <Content>
        <AddButton to={`${match.url}/add`} pulse={!playingSurfacesAdded} />

        {playingSurfacesAdded ? (
          <Paper>
            <List component="nav" disablePadding>
              {playingSurfaces.map(({ id, surfaceType, material }) => (
                <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                  <ListItem button>
                    <ListItemText primary={`${surfaceType} - ${material}`} />
                  </ListItem>
                </StyledNavLink>
              ))}
            </List>
          </Paper>
        ) : (
          <EmptyListPlaceholder text="Try adding a playing surface to get started!" />
        )}
      </Content>
    )
  }
}

PlayingSurfaceList.contextType = NavContext
