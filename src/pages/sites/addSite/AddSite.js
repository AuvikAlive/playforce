import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { StyledAddSite } from './StyledAddSite'

export class AddSite extends Component {
  state = {
    name: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
    latitude: '',
    longitude: '',
    division: '',
    operator: '',
    loading: false,
    error: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Add a Site')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    'geolocation' in navigator &&
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          this.setState({
            latitude: latitude.toFixed(5),
            longitude: longitude.toFixed(5),
          })
        },
        error => console.log(error),
      )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  publish = async () => {
    const {
      name,
      street,
      suburb,
      state,
      postcode,
      country,
      latitude,
      longitude,
      division,
      operator,
    } = this.state
    const { firestore, userId } = this.props

    if (
      name &&
      street &&
      suburb &&
      state &&
      postcode &&
      country &&
      latitude &&
      longitude &&
      division &&
      operator
    ) {
      this.setState({ error: '', loading: true })

      try {
        await firestore.add(
          {
            collection: 'users',
            doc: userId,
            subcollections: [{ collection: 'sites' }],
          },
          {
            addedUser: userId,
            name,
            street,
            suburb,
            state,
            postcode,
            country,
            latitude: Number(latitude),
            longitude: Number(longitude),
            division,
            operator,
          },
        )
        this.setState({ loading: false })
      } catch (error) {
        this.setState({ error: error.message, loading: false })
      }
    } else {
      this.setState({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  render() {
    const {
      name,
      street,
      suburb,
      state,
      postcode,
      country,
      latitude,
      longitude,
      division,
      operator,
      error,
      loading,
    } = this.state

    const { operators } = this.props

    return (
      <StyledAddSite className="StyledAddSite">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={this.onInputChange('name')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Street"
                value={street}
                onChange={this.onInputChange('street')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Suburb"
                value={suburb}
                onChange={this.onInputChange('suburb')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="State"
                value={state}
                onChange={this.onInputChange('state')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Postcode"
                value={postcode}
                onChange={this.onInputChange('postcode')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Country"
                value={country}
                onChange={this.onInputChange('country')}
                margin="normal"
              />

              <TextField
                fullWidth
                type="number"
                label="Latitude"
                value={latitude}
                onChange={this.onInputChange('latitude')}
                margin="normal"
              />

              <TextField
                fullWidth
                type="number"
                label="Longitude"
                value={longitude}
                onChange={this.onInputChange('longitude')}
                margin="normal"
              />

              <TextField
                fullWidth
                type="number"
                label="Division"
                value={division}
                onChange={this.onInputChange('division')}
                margin="normal"
              />

              <TextField
                fullWidth
                select
                label="Operator"
                value={operator}
                onChange={this.onInputChange('operator')}
                margin="normal"
              >
                {operators.map(({ name }, index) => (
                  <MenuItem key={index} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </TextField>
            </form>

            {error && <p className="error">{error}</p>}

            {!error &&
              loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.publish}
              >
                Publish
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledAddSite>
    )
  }
}

AddSite.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
