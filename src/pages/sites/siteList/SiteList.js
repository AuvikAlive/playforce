import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import SearchBar from '../../../components/searchBar'
import { StyledSiteList } from './StyledSiteList'

export class SiteList extends Component {
  componentDidMount() {
    const {
      openSearchBar,
      searchBarOpen,
      query,
      firestore,
      userId,
      fetchSites,
    } = this.props
    const {
      setNavTitle,
      setRightNavComponent,
      setSearchComponent,
    } = this.context

    if (searchBarOpen && query) {
      firestore.get({
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'sites', where: ['name', '==', query] }],
      })
    }

    setNavTitle('Sites')

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>,
    )

    setSearchComponent(
      <SearchBar
        onSearchEnd={() => {
          firestore.get({
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'sites' }],
          })
        }}
      />,
    )

    fetchSites(userId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      const { query } = nextProps
      if (query) {
        const { firestore, userId } = this.props
        firestore.get({
          collection: 'users',
          doc: userId,
          subcollections: [
            { collection: 'sites', where: ['name', '==', query] },
          ],
        })
      }
    }
  }

  componentWillUnmount() {
    const { closeSearchBar } = this.props
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
    const { match, searchBarOpen, sites } = this.props

    return (
      <StyledSiteList className="StyledSiteList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add a site"
            className={!searchBarOpen && isEmpty(sites) ? 'pulse' : ''}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            {searchBarOpen &&
              isEmpty(sites) && (
                <Paper className="paper">
                  <List component="nav" disablePadding>
                    <ListItem>
                      <ListItemText primary="No match found" />
                    </ListItem>
                  </List>
                </Paper>
              )}
            {!searchBarOpen &&
              isEmpty(sites) && (
                <Typography variant="title" align="center">
                  Try adding a site to get started!
                </Typography>
              )}

            {!isEmpty(sites) && (
              <Paper className="paper">
                <List component="nav" disablePadding>
                  {sites.map(({ name, id }, index, list) => {
                    return (
                      <StyledNavLink key={id} to={`/sites/${id}`}>
                        <ListItem divider button>
                          <ListItemText primary={name} />
                        </ListItem>
                      </StyledNavLink>
                    )
                  })}
                </List>
              </Paper>
            )}
          </Grid>
        </Grid>
      </StyledSiteList>
    )
  }
}

SiteList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
  setSearchComponent: PropTypes.func,
  removeSearchComponent: PropTypes.func,
}
