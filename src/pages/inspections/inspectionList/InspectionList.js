import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import CheckCircleIcon from 'material-ui-icons/CheckCircle'
// import Chip from 'material-ui/Chip'
import Paper from 'material-ui/Paper'
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import { isEmpty } from 'react-redux-firebase'
import { StyledInspectionList } from './StyledInspectionList'
import SearchBar from '../../../components/searchBar'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class InspectionList extends Component {
  state = { unsubscribe: undefined }

  async componentDidMount() {
    const { openSearchBar, userId, fetchInspectionsRealTime } = this.props
    const {
      setNavTitle,
      setRightNavComponent,
      setSearchComponent,
    } = this.context

    setNavTitle('Inspections')

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>
    )

    setSearchComponent(<SearchBar />)

    const unsubscribe = await fetchInspectionsRealTime(userId)
    this.setState({ unsubscribe })
  }

  componentWillUnmount() {
    const { closeSearchBar } = this.props
    const {
      removeNavTitle,
      removeRightNavComponent,
      removeSearchComponent,
    } = this.context
    const { unsubscribe } = this.state

    removeNavTitle()
    removeRightNavComponent()
    closeSearchBar()
    removeSearchComponent()
    unsubscribe()
  }

  render() {
    const { match, inspectionsLoaded, inspections } = this.props

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
              {inspections.map(
                (
                  {
                    id,
                    cover,
                    inspectionNumber,
                    coverAdded,
                    auditSummaryAdded,
                    conditionRatingsAdded,
                    complianceIssuesAdded,
                    maintenanceIssuesAdded,
                  },
                  index
                ) => {
                  const { location, client } = cover
                  const { name, suburb } = location
                  // const reportTypes = [
                  //   'Comprehensive',
                  //   'Operational',
                  //   'Routine',
                  // ]
                  const completed =
                    coverAdded && auditSummaryAdded && conditionRatingsAdded

                  return cover ? (
                    <StyledNavLink
                      key={id}
                      to={{
                        pathname: `${match.url}/edit`,
                        state: {
                          id,
                        },
                      }}
                    >
                      <ListItem divider button>
                        <Avatar className="avatar">{inspectionNumber}</Avatar>
                        <ListItemText
                          primary={`${name}, ${suburb}`}
                          secondary={client}
                        />
                        <ListItemSecondaryAction className="secondary-actions">
                          {/* <Chip
                            label={
                              reportTypes[index % 3].substring(0, 4) + '...'
                            }
                            className={`chip ${reportTypes[
                              index % 3
                            ].toLowerCase()}`}
                          /> */}
                          <CheckCircleIcon
                            style={{
                              visibility: completed ? '' : 'hidden',
                            }}
                            color="primary"
                            className="icon"
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    </StyledNavLink>
                  ) : null
                }
              )}
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
