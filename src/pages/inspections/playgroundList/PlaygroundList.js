import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { Content } from '../../../components/content/Content'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { EmptyListPlaceholder } from '../../../components/emptyListPlacehoder/EmptyListPlaceholder'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
} from '../../../functions/'

export class PlaygroundList extends Component {
  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Playgrounds')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, playgroundsAdded, playgrounds } = this.props

    return (
      <Content>
        <AddButton to={`${match.url}/add`} pulse={!playgroundsAdded} />

        {playgroundsAdded ? (
          <Paper>
            <List component="nav" disablePadding>
              {playgrounds.map(({ id, name, conditionRatings }) => (
                <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                  <ListItem button>
                    <ListItemText primary={name} />
                    {conditionRatings.length > 0 && (
                      <CheckCircleIcon color="primary" />
                    )}
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

PlaygroundList.contextType = NavContext
