import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import { StyledConditionRatingList } from './StyledConditionRatingList'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'

export class ConditionRatingList extends Component {
  state = {}

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Condition Rating - Individual Items')

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
        <StyledNavLink to={`${match.url}/add`}>
          {conditionRatings.length ? (
            <Grid container>
              {conditionRatings.map(
                ({ image, equipment, manufacturer, condition }, index) => {
                  return (
                    <Grid item key={index} xs={12} sm={6}>
                      <Card>
                        {image && (
                          <CardMedia className="card-media" image={image} />
                        )}
                      </Card>
                      <CardContent>
                        <Typography variant="title">{equipment}</Typography>
                        <Typography variant="subheading">
                          {manufacturer}
                        </Typography>
                        <Typography variant="subheading">
                          {condition}
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
          <Button
            variant="fab"
            color="primary"
            aria-label="add condition rating"
            className="add-icon pulse"
          >
            <AddIcon />
          </Button>
        </StyledNavLink>
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
