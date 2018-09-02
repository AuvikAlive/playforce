import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { isEmpty } from 'lodash'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { Content } from '../../../components/content/Content'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftRightNav,
  closeMenu,
} from '../../../functions/'
import { onComponentDidMount } from './onComponentDidMount'

export class PlaygroundItems extends Component {
  state = {
    menuAnchor: null,
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { menuAnchor } = this.state
    const { match, history, playground } = this.props

    const {
      conditionRatings,
      complianceIssues,
      maintenanceIssues,
      playingSurfaces,
      impactGeneralInfo,
      impactTests,
    } = playground

    const impactGeneralInfoAdded = !isEmpty(impactGeneralInfo)

    const maintenanceIssuesAdded = maintenanceIssues.length > 0

    const impactTestsAdded =
      !!impactTests &&
      impactTests.some(({ dropTests }) => !!dropTests && dropTests.length > 0)

    return (
      <Content>
        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/conditionRating`}>
              <ListItem button>
                <ListItemText primary="Condition Rating" />
                {conditionRatings.length > 0 && (
                  <CheckCircleIcon color="primary" />
                )}
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/complianceIssues`}>
              <ListItem button>
                <ListItemText primary="Identified Compliance Issues" />
                {complianceIssues.length > 0 && (
                  <CheckCircleIcon color="primary" />
                )}
              </ListItem>
            </StyledNavLink>

            {maintenanceIssuesAdded && (
              <StyledNavLink to={`${match.url}/maintenanceIssues`}>
                <ListItem button>
                  <ListItemText primary="Identified Maintenance Issues" />
                  <CheckCircleIcon color="primary" />
                </ListItem>
              </StyledNavLink>
            )}

            <StyledNavLink to={`${match.url}/playingSurfaces`}>
              <ListItem button>
                <ListItemText primary="Playing Surfaces" />
                {playingSurfaces.length > 0 && (
                  <CheckCircleIcon color="primary" />
                )}
              </ListItem>
            </StyledNavLink>

            {impactGeneralInfoAdded && (
              <StyledNavLink to={`${match.url}/impactTest`}>
                <ListItem button>
                  <ListItemText primary="Impact Attenuation Test" />
                  {impactTestsAdded && <CheckCircleIcon color="primary" />}
                </ListItem>
              </StyledNavLink>
            )}
          </List>
        </Paper>

        {
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={closeMenu(this)}
            MenuListProps={{ disablePadding: true }}
          >
            {!maintenanceIssuesAdded && (
              <MenuItem
                onClick={() =>
                  history.push(`${match.url}/maintenanceIssues/add`)
                }
              >
                Add Maintenance Issue
              </MenuItem>
            )}

            {!impactGeneralInfoAdded && (
              <MenuItem
                onClick={() =>
                  history.push(`${match.url}/impactTest/addAttenuationTest`)
                }
              >
                Add Impact Test
              </MenuItem>
            )}
          </Menu>
        }
      </Content>
    )
  }
}

PlaygroundItems.contextTypes = contextTypesTitleLeftRightNav
