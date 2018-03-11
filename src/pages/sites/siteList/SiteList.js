import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import SearchBar from '../../../components/searchBar'
import { Content } from '../../../components/content/Content'

export class SiteList extends Component {
  componentDidMount() {
    const { openSearchBar, open, query, firestore } = this.props
    const {
      setNavTitle,
      setRightNavComponent,
      setSearchComponent,
    } = this.context

    if (open && query) {
      // const { firestore } = this.props
      firestore.get({ collection: 'sites', where: ['name', '==', query] })
    }

    // firestore.setListener({
    //   collection: 'sites',
    //   orderBy: 'name',
    //   where: ['addedUser', '==', email],
    // })

    setNavTitle('Sites')

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>,
    )

    setSearchComponent(
      <SearchBar
        onSearchEnd={() => {
          firestore.get({ collection: 'sites', orderBy: 'name' })
        }}
      />,
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.props.query) {
      const { query } = nextProps
      if (query) {
        const { firestore } = this.props
        firestore.get({ collection: 'sites', where: ['name', '==', query] })
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

    // firestore.unsetListener({
    //   collection: 'sites',
    // })
    removeNavTitle()
    removeRightNavComponent()
    closeSearchBar()
    removeSearchComponent()
  }

  render() {
    const { sites, open } = this.props

    let content

    if (open) {
      content = isEmpty(sites) ? (
        <ListItem>
          <ListItemText primary="No match found" />
        </ListItem>
      ) : (
        sites.map(({ name, id }, index, list) => {
          return (
            <div key={name}>
              <StyledNavLink to={`/sites/${id}`}>
                <ListItem button>
                  <ListItemText primary={name} />
                </ListItem>
              </StyledNavLink>
              {index !== list.length - 1 && <Divider />}
            </div>
          )
        })
      )
    } else {
      content = isEmpty(sites) ? (
        <ListItem>
          <ListItemText primary="No inspection added" />
        </ListItem>
      ) : (
        sites.map(({ name, id }, index, list) => {
          return (
            <div key={name}>
              <StyledNavLink to={`/sites/${id}`}>
                <ListItem button>
                  <ListItemText primary={name} />
                </ListItem>
              </StyledNavLink>
              {index !== list.length - 1 && <Divider />}
            </div>
          )
        })
      )
    }

    return (
      <Content>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="paper">
              <List component="nav" disablePadding>
                {content}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Content>
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
