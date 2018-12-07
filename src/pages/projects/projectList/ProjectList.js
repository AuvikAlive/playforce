import React, { Component } from "react"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import { AddButton } from "../../../components/addButton/AddButton"
import { StyledNavLink } from "../../../components/styledNavLink/StyledNavLink"
import { showContentWhenLoaded } from "../../../functions/"
import { NavContext } from "components/NavContextProvider/"
import { onComponentDidMount, onComponentWillUnmount } from "./functions/"
import { StyledProjectList } from "./StyledProjectList"
import { EmptyListPlaceholder } from "../../../components/emptyListPlacehoder/EmptyListPlaceholder"

export class ProjectList extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  render() {
    const { projectsLoaded, projects, match } = this.props
    const projectsAdded = projects.length > 0

    return showContentWhenLoaded(
      projectsLoaded,
      <StyledProjectList className="StyledProjectList">
        <AddButton to={match.url + "/addProject"} pulse={!projectsAdded} />

        {projectsAdded ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {projects.map(({ name, id }) => (
                <StyledNavLink key={id} to={`${match.url}/manageProject/${id}`}>
                  <ListItem divider button>
                    <ListItemText primary={name} />
                  </ListItem>
                </StyledNavLink>
              ))}
            </List>
          </Paper>
        ) : (
          <EmptyListPlaceholder text="Try adding a project to get started!" />
        )}
      </StyledProjectList>
    )
  }
}

ProjectList.contextType = NavContext
