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
import { Content } from '../../../components/content/Content'

export class SiteList extends Component {
  componentDidMount() {
    const { openSearchBar } = this.props
    const { setRightNavComponent, setNavTitle } = this.context

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
  }

  componentWillUnmount() {
    const { closeSearchBar } = this.props
    const { removeRightNavComponent } = this.context

    // firestore.unsetListener({
    //   collection: 'sites',
    // })
    removeRightNavComponent()
    closeSearchBar()
  }

  render() {
    const { sites } = this.props

    return (
      <Content>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="paper">
              <List component="nav" disablePadding>
                {isEmpty(sites) ? (
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
                )}
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
}
