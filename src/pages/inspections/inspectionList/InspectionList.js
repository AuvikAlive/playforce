import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'

export class InspectionList extends Component {
  componentDidMount() {
    const { openSearchBar, firestore, userId } = this.props
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

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'inspections' }],
    })
  }

  componentWillUnmount() {
    const { closeSearchBar, firestore, userId } = this.props
    const {
      removeNavTitle,
      removeRightNavComponent,
      removeSearchComponent,
    } = this.context

    removeNavTitle()
    removeRightNavComponent()
    closeSearchBar()
    removeSearchComponent()

    firestore.unsetListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'inspections' }],
    })
  }

  render() {
    const { match } = this.props

    let { inspections } = this.props

    inspections = inspections && objectToArrayWithId(inspections)

    return inspections ? (
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
              {inspections.map(
                ({ id, cover: { location: { name }, client } }) => {
                  return (
                    <ListItem divider key={id} button>
                      <ListItemText primary={`${name} -  ${client}`} />
                    </ListItem>
                  )
                },
              )}
            </List>
          </Paper>
        )}
      </StyledInspectionList>
    ) : null
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
