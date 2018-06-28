import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledProjectList } from './StyledProjectList'

export class ProjectList extends Component {
  async componentDidMount() {
    const { setNavTitle, addUnsubscriber } = this.context
    const { projectsLoaded, fetchProjectsRealTime, userId } = this.props

    setNavTitle('Manage Projects')

    !projectsLoaded && addUnsubscriber(await fetchProjectsRealTime(userId))
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  render() {
    const { projectsLoaded, projects, match } = this.props
    const projectsAdded = projects.length > 0

    return projectsLoaded ? (
      <StyledProjectList className="StyledProjectList">
        <StyledNavLink to={match.url + '/addProject'} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={projectsAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

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
          <Typography variant="title" align="center">
            Try adding a project to get started!
          </Typography>
        )}
      </StyledProjectList>
    ) : (
      <LinearProgress />
    )
  }
}

ProjectList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
