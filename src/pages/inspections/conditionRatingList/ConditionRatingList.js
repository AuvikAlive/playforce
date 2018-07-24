import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import ModeEditIcon from '@material-ui/icons/ModeEdit'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import { format } from 'date-fns'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  capitalize,
} from '../../../functions/'
import { StyledConditionRatingList } from './StyledConditionRatingList'

export class ConditionRatingList extends Component {
  state = {}

  componentDidMount() {
    const title = 'Condition Ratings'

    onComponentDidMountWithTitleLeftNav(this, title)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { match, conditionRatings } = this.props
    const conditionRatingsAdded =
      !!conditionRatings && conditionRatings.length > 0

    return (
      <StyledConditionRatingList className="StyledConditionRatingList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add condition rating"
            className={conditionRatingsAdded ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>
        {conditionRatingsAdded ? (
          <Grid container>
            {conditionRatings.map(
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
        ) : (
          <Typography variant="title" align="center">
            Try adding an item to get started!
          </Typography>
        )}
      </StyledConditionRatingList>
    )
  }
}

ConditionRatingList.contextTypes = contextTypesTitleLeftNav
