import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import { LinearProgress } from 'material-ui/Progress'
import { isEmpty } from 'react-redux-firebase'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { Content } from '../../../components/content/Content'

export class SiteList extends Component {
  componentDidMount() {
    const { openSearchBar, firestore } = this.props
    const { setRightNavComponent, setNavTitle } = this.context

    firestore.setListener('sites')

    setNavTitle('Sites')

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { closeSearchBar, firestore } = this.props
    const { removeRightNavComponent } = this.context

    firestore.unsetListener('sites')
    removeRightNavComponent()
    closeSearchBar()
  }

  render() {
    const { sites } = this.props

    return isEmpty(sites) ? (
      <LinearProgress />
    ) : (
      <Content>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="paper">
              <List component="nav" disablePadding>
                {sites.map(({ name, id }, index, list) => {
                  return (
                    <div key={name}>
                      <StyledNavLink to={`/sites/${index}`}>
                        <ListItem button>
                          <ListItemText primary={name} />
                        </ListItem>
                      </StyledNavLink>
                      {index !== list.length - 1 && <Divider />}
                    </div>
                  )
                })}
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
