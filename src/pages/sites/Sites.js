import React from 'react'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { StyledSites } from './StyledSites'
import { data } from './data'

export const Sites = () => (
  <StyledSites>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className="paper">
          <List component="nav" disablePadding>
            {data.sites.map(({ name, id }, index, list) => {
              return (
                <div key={name}>
                  <ListItem button>
                    <ListItemText primary={name} />
                  </ListItem>
                  {index !== list.length - 1 && <Divider />}
                </div>
              )
            })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  </StyledSites>
)
