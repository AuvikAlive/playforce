import React from 'react'
import Button from '@material-ui/core/Button'
import ModeEditIcon from '@material-ui/icons/Edit'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import { format } from 'date-fns'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { capitalize } from '../../../functions/'
import { StyledGridList } from '../StyledGridList'

export const ListView = ({ groupedConditionRatings, match, value }) => {
  const items = groupedConditionRatings[value]

  return (
    <StyledGridList className="StyledConditionRatingList">
      <Grid container>
        {items &&
          items.length > 0 &&
          items.map(
            (
              {
                id,
                image,
                itemType,
                equipment,
                assetId,
                manufacturer,
                condition,
                estimatedDateInstalled,
              },
              index
            ) => {
              return (
                <Grid item key={index} xs={12}>
                  {image && <img src={image} alt="equipment type" />}

                  <CardContent className="card-content">
                    <StyledNavLink
                      to={`${match.url}/edit/${id}`}
                      className="floating-icon"
                    >
                      <Button
                        variant="fab"
                        color="primary"
                        aria-label="edit compliance issue"
                      >
                        <ModeEditIcon />
                      </Button>
                    </StyledNavLink>

                    <Typography variant="title">
                      Equipment: {equipment}
                    </Typography>

                    {itemType && (
                      <Typography variant="subheading">
                        Item Type: {capitalize(itemType)}
                      </Typography>
                    )}

                    {assetId && (
                      <Typography variant="subheading">
                        Asset Id: {assetId}
                      </Typography>
                    )}

                    {manufacturer && (
                      <Typography variant="subheading">
                        Manufacturer: {manufacturer}
                      </Typography>
                    )}

                    <Typography variant="subheading">
                      Condition: {condition}
                    </Typography>

                    {estimatedDateInstalled && (
                      <Typography variant="subheading">
                        Estimated Date Installed:{' '}
                        {format(estimatedDateInstalled, 'YYYY')}
                      </Typography>
                    )}
                  </CardContent>
                </Grid>
              )
            }
          )}
      </Grid>
    </StyledGridList>
  )
}
