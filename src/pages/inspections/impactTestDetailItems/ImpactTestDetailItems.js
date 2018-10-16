import React, { Component } from 'react'
import { compose } from 'recompose'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withDialog } from '../../../hocs/withDialog/withDialog'
import { AddButton } from '../../../components/addButton/AddButton'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitleLeftRightNav } from '../../../constants/'
import { onComponentWillUnmountWithTitleLeftRightNav } from '../../../functions/'
import { StyledImpactTestDetailItems } from './StyledImpactTestDetailItems'
import { onComponentDidMount } from './functions/onComponentDidMount'

class BaseImpactTestDetailItems extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftRightNav(this)
  }

  render() {
    const { match, impactTest } = this.props

    const dropTestAdded =
      impactTest && impactTest.dropTests && impactTest.dropTests.length > 0

    return (
      <StyledImpactTestDetailItems className="StyledImpactTestDetailItems">
        <AddButton to={`${match.url}/addDrop`} pulse={!dropTestAdded} />

        <Paper>
          <List component="nav" disablePadding>
            <StyledNavLink to={`${match.url}/surface`}>
              <ListItem button>
                <ListItemText primary="Surface Details" />
              </ListItem>
            </StyledNavLink>

            <StyledNavLink to={`${match.url}/comment`}>
              <ListItem button>
                <ListItemText primary="Comment" />
              </ListItem>
            </StyledNavLink>
          </List>

          <List
            component="nav"
            disablePadding
            subheader={<ListSubheader component="div">Drops</ListSubheader>}
          >
            {dropTestAdded &&
              impactTest.dropTests.map(({ id, dropNumber }) => (
                <StyledNavLink key={id} to={`${match.url}/editDrop/${id}`}>
                  <ListItem button>
                    <ListItemText primary={`Drop ${dropNumber}`} />
                  </ListItem>
                </StyledNavLink>
              ))}
          </List>
        </Paper>
      </StyledImpactTestDetailItems>
    )
  }
}

BaseImpactTestDetailItems.contextTypes = contextTypesTitleLeftRightNav

const enhance = compose(
  withFeedback,
  withDialog
)

export const ImpactTestDetailItems = enhance(BaseImpactTestDetailItems)
