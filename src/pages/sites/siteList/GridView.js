import React from 'react'
import Grid from '@material-ui/core/Grid'
import { SiteCard } from '../siteCard/SiteCard'
import { EmptySiteListPlaceholder } from './EmptySiteListPlaceholder'

export const GridView = ({ sites }) => {
  return sites.length > 0 ? (
    <Grid container spacing={16}>
      {sites.map((site, index, list) => {
        return (
          <Grid key={index} item xs={12} sm={6} md={4} xl={3}>
            <SiteCard site={site} showHeader curtailAddress hideDivision />
          </Grid>
        )
      })}
    </Grid>
  ) : (
    <EmptySiteListPlaceholder />
  )
}
