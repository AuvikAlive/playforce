import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'
import { StyledPlayingSurfaceList } from './StyledPlayingSurfaceList'

export class PlayingSurfaceList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Playing Surfaces')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, playingSurfaces } = this.props
    const playingSurfacesAdded = playingSurfaces && playingSurfaces.length > 0

    return (
      <StyledPlayingSurfaceList className="StyledPlayingSurfaceList">
        <AddButton to={`${match.url}/add`} pulse={!playingSurfacesAdded} />

        {playingSurfacesAdded ? (
          <Paper>
            <List component="nav" disablePadding>
              {playingSurfaces.map(({ id, surface: { location } }) => (
                <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                  <ListItem button>
                    <ListItemText primary={location} />
                  </ListItem>
                </StyledNavLink>
              ))}
            </List>
          </Paper>
        ) : (
          <EmptyListPlaceholder text="Try adding a playing surface to get started!" />
        )}
      </StyledPlayingSurfaceList>
    )
  }
}

PlayingSurfaceList.contextTypes = contextTypesTitleLeftNav
