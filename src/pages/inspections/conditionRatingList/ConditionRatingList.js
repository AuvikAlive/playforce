import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import { format } from 'date-fns'
import { StyledConditionRatingList } from './StyledConditionRatingList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class ConditionRatingList extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Condition Ratings')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  render() {
    const { match, conditionRatings } = this.props

    return (
      <StyledConditionRatingList className="StyledConditionRatingList">
        <StyledNavLink to={`${match.url}/add`} className="add-icon">
          <Button
            variant="fab"
            color="primary"
            aria-label="add condition rating"
            className={conditionRatings.length ? '' : 'pulse'}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>
        {conditionRatings.length ? (
          <Grid container>
            {conditionRatings.map(
              (
                {
                  image,
                  equipment,
                  manufacturer,
                  condition,
                  estimatedDateInstalled,
                },
                index,
              ) => {
                return (
                  <Grid item key={index} xs={12} sm={6}>
                    <Card>
                      {image && (
                        <CardMedia className="card-media" image={image} />
                      )}
                    </Card>
                    <CardContent className="card-content">
                      <StyledNavLink
                        to={`${match.url}/edit/${index}`}
                        className="edit-icon"
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
                      <Typography variant="subheading">
                        Manufacturer: {manufacturer}
                      </Typography>
                      <Typography variant="subheading">
                        Condition: {condition}
                      </Typography>

                      <Typography variant="subheading">
                        Estimated Date Installed:{' '}
                        {format(estimatedDateInstalled, 'DD MMMM YYYY')}
                      </Typography>
                    </CardContent>
                  </Grid>
                )
              },
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

ConditionRatingList.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
