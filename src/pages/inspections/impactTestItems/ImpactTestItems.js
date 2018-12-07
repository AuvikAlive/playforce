import React, { Component } from "react"
import { compose } from "recompose"
import CircularProgress from "@material-ui/core/CircularProgress"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { withDialog } from "../../../hocs/withDialog/withDialog"
import { withFeedback } from "../../../hocs/withFeedback/withFeedback"
import { AddButton } from "../../../components/addButton/AddButton"
import { StyledNavLink } from "../../../components/styledNavLink/StyledNavLink"
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentWillUnmountWithTitleLeftRightNav,
  closeMenu,
} from "../../../functions/"
import { StyledImpactTestItems } from "./StyledImpactTestItems"
import { onComponentDidMount } from "./onComponentDidMount"
import { generateReport } from "./generateReport"

class BaseImpactTestItems extends Component {
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
    const {
      match,
      impactTests,
      generateImpactTestReport,
      error,
      loading,
    } = this.props

    const { menuAnchor } = this.state
    const impactTestsAdded = impactTests && impactTests.length > 0

    return (
      <StyledImpactTestItems className="StyledImpactTestItems">
        <AddButton to={`${match.url}/add`} pulse={!impactTestsAdded} />

        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/general`}>
              <ListItem button>
                <ListItemText primary="General Info" />
              </ListItem>
            </StyledNavLink>
          </List>

          <List
            component="nav"
            disablePadding
            subheader={<ListSubheader component="div">Tests</ListSubheader>}
          >
            {impactTests.map(({ id, surface: { location } }) => (
              <StyledNavLink key={id} to={`${match.url}/edit/${id}`}>
                <ListItem button>
                  <ListItemText primary={location} />
                </ListItem>
              </StyledNavLink>
            ))}
          </List>
        </Paper>

        {generateImpactTestReport && !loading && (
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={closeMenu(this)}
            MenuListProps={{ disablePadding: true }}
          >
            <MenuItem onClick={generateReport(this)}>Generate Report</MenuItem>
          </Menu>
        )}

        {error && <p className="error">{error}</p>}

        {!error && loading && (
          <div className="loading">
            <CircularProgress />
          </div>
        )}
      </StyledImpactTestItems>
    )
  }
}

BaseImpactTestItems.contextType = NavContext

const enhance = compose(
  withDialog,
  withFeedback
)

export const ImpactTestItems = enhance(BaseImpactTestItems)
