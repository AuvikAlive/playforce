import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import { StyledStandardList } from './StyledStandardList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class StandardsList extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Standards')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }
  render() {
    const { match, standards } = this.props

    return (
      <StyledStandardList className="StyledStandardList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a standard"
            className={!standards && 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {standards ? (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {standards.map(({ code, title, date }) => {
                return (
                  <StyledNavLink to={`${match.url}/${code}`}>
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  </StyledNavLink>
                )
              })}
            </List>
          </Paper>
        ) : (
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        )}
      </StyledStandardList>
    )
  }
}

StandardsList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
