import React, { Component } from "react"
import ModeEditIcon from "@material-ui/icons/Edit"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import { Content } from "../../../components/content/Content"
import { AddButton } from "../../../components/addButton/AddButton"
import { StyledNavLink } from "../../../components/styledNavLink/StyledNavLink"
import { EmptyListPlaceholder } from "../../../components/emptyListPlacehoder/EmptyListPlaceholder"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from "../../../functions/"
import { onComponentDidMount } from "./onComponentDidMount"

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
      <Content>
        <AddButton to={`${match.url}/add`} pulse={!standardsAdded} />

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
          <EmptyListPlaceholder text="Try adding a standard to get started!" />
        )}
      </Content>
    )
  }
}

StandardsList.contextType = NavContext
