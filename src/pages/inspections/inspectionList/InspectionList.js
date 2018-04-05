import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { isEmpty } from 'react-redux-firebase'
import { StyledInspectionList } from './StyledInspectionList'
import SearchBar from '../../../components/searchBar'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionList extends Component {
  componentDidMount() {
    const { openSearchBar, userId, fetchInspections } = this.props
    const {
      setNavTitle,
      setRightNavComponent,
      setSearchComponent,
    } = this.context

    setNavTitle('Inspections')

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>,
    )

    setSearchComponent(<SearchBar />)
    fetchInspections(userId)
  }

  componentWillUnmount() {
    const { closeSearchBar, } = this.props
    const {
      removeNavTitle,
      removeRightNavComponent,
      removeSearchComponent,
    } = this.context

    removeNavTitle()
    removeRightNavComponent()
    closeSearchBar()
    removeSearchComponent()
  }

  render() {
    const {
      match,
      inspectionsLoaded,
      inspections,
      toggleEditInspection,
    } = this.props

    return inspectionsLoaded ? (
      <StyledInspectionList className="StyledInspectionList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add inspection"
            className={isEmpty(inspections) ? 'pulse' : ''}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>

        {isEmpty(inspections) ? (
          <Typography variant="title" align="center">
            Try adding an inspection to get started!
          </Typography>
        ) : (
          <Paper className="paper">
            <List component="nav" disablePadding>
              {inspections.map(item => {
                return item && item.cover ? (
                  <StyledNavLink
                    key={item.id}
                    to={{
                      pathname: `${match.url}/edit`,
                      state: {
                        id: item.id,
                      },
                    }}
                    onClick={() =>
                      toggleEditInspection({
                        editMode: true,
                      })
                    }
                  >
                    <ListItem divider button>
                      <ListItemText
                        primary={`${item.cover.location.name} -  ${
                          item.cover.client
                        }`}
                      />
                    </ListItem>
                  </StyledNavLink>
                ) : null
              })}
            </List>
          </Paper>
        )}
      </StyledInspectionList>
    ) : (
      <LinearProgress />
    )
  }
}

InspectionList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
}
