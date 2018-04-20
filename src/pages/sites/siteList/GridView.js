import React from 'react'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { SiteCard } from '../siteCard/SiteCard'

export const GridView = ({ sites }) => {
  return sites.length > 0 ? (
    <Grid container>
      {sites.map((site, index, list) => {
        return (
          <Grid item xs={12} key={index}>
            <SiteCard site={site} showHeader />
          </Grid>
        )
      })}
    </Grid>
  ) : (
    <Typography variant="title" align="center">
      Try adding a site to get started!
    </Typography>
  )
}
