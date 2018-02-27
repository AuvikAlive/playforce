import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { Content } from '../../../components/content/Content'
import { data } from '../data'

export class SiteList extends Component {
  componentDidMount() {
    const { setRightNavComponent, openSearchBar } = this.props

    setRightNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={openSearchBar}>
        <SearchIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeRightNavComponent, closeSearchBar } = this.props

    removeRightNavComponent()
    closeSearchBar()
  }

  render() {
    return (
      <Content>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className="paper">
              <List component="nav" disablePadding>
                {data.sites.map(({ name, id }, index, list) => {
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
                })}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Content>
    )
  }
}
