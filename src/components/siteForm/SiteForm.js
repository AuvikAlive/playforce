import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import AddBoxIcon from 'material-ui-icons/AddBox'
import { OperatorsDialogContainer } from '../operatorsDialog/OperatorsDialogContainer'
import { AutoComplete } from '../autoComplete/AutoComplete'
import { onEventInputChange } from '../../utilities/onEventInputChange'
import { onValueInputChange } from '../../utilities/onValueInputChange'
import { getCurrentPosition } from './getCurrentPosition'
import { StyledSiteForm } from './StyledSiteForm'

export class SiteForm extends Component {
  state = {
    name: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
    division: '',
    operator: '',
    position: undefined,
  }

  componentDidMount() {
    const {
      userId,
      operatorsLoaded,
      fetchOperatorsRealTime,
      initialData,
    } = this.props

    !operatorsLoaded && fetchOperatorsRealTime(userId)
    initialData && this.loadInitialData(initialData)
    this.setPosition()
  }

  componentWillReceiveProps({ initialData }) {
    initialData &&
      initialData !== this.props.initialData &&
      this.loadInitialData(initialData)
  }

  loadInitialData = initialData =>
    this.setState({
      ...initialData,
    })

  onEventInputChange = onEventInputChange
  onValueInputChange = onValueInputChange

  setPosition = async () => {
    const { latitude, longitude, radius } = await getCurrentPosition()

    this.setState({ position: { latitude, longitude, radius } })
  }

  getPlaceSuggestions = type => async value => {
    if (value) {
      try {
        const results = await this.getQueryPredictions(value, type && [type])
        return results.map(({ description }) => description)
      } catch (error) {
        if (error === 'ZERO_RESULTS') {
          return []
        } else {
          console.log(error)
        }
      }
    }

    return []
  }

  getQueryPredictions = async (input, types) => {
    const { position } = this.state
    const { latitude, longitude, radius } =
      position || (await getCurrentPosition())
    const googleMaps = window.google.maps
    const location = new googleMaps.LatLng(latitude, longitude)
    const places = googleMaps.places
    const service = new places.AutocompleteService()

    return new Promise((resolve, reject) => {
      service.getPlacePredictions(
        {
          input,
          location,
          radius,
          ...(types && { types }),
        },
        (predictions, status) =>
          status === places.PlacesServiceStatus.OK
            ? resolve(predictions)
            : reject(status)
      )
    })
  }

  getOperatorSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { operators } = this.props

    return inputLength === 0
      ? operators.map(item => item.name)
      : operators
          .filter(
            item => item.name.toLowerCase().slice(0, inputLength) === inputValue
          )
          .map(item => item.name)
  }

  getGeocode = address => {
    const geocoder = new window.google.maps.Geocoder()

    return new Promise((resolve, reject) => {
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          resolve(results[0].geometry.location)
        } else {
          console.log(status)
          reject(status)
        }
      })
    })
  }

  submit = async () => {
    const {
      name,
      street,
      suburb,
      state,
      postcode,
      country,
      division,
      operator,
    } = this.state
    const { onSubmit, afterSubmit, userId, setFeedback } = this.props

    if (name && street && suburb && state && postcode && country && operator) {
      setFeedback({ error: '', loading: true })
      const address = `${street}, ${suburb} ${state} ${postcode}, ${country}`

      try {
        const location = await this.getGeocode(address)
        const site = {
          addedUser: userId,
          name,
          street,
          suburb,
          state,
          postcode,
          country,
          division,
          operator,
          latitude: Number(location.lat().toFixed(5)),
          longitude: Number(location.lng().toFixed(5)),
        }
        const result = await onSubmit(site)
        setFeedback({ loading: false })
        afterSubmit && afterSubmit(result)
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
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
      division,
      operator,
    } = this.state
    const {
      operatorsLoaded,
      openDialog,
      buttonText,
      error,
      loading,
    } = this.props

    return operatorsLoaded ? (
      <StyledSiteForm className="StyledSiteForm">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <AutoComplete
                label="Name"
                value={name}
                onChange={this.onValueInputChange('name')}
                getSuggestions={this.getPlaceSuggestions('establishment')}
              />

              <AutoComplete
                label="Street"
                value={street}
                onChange={this.onValueInputChange('street')}
                getSuggestions={this.getPlaceSuggestions('(regions)')}
              />

              <AutoComplete
                label="Suburb"
                value={suburb}
                onChange={this.onValueInputChange('suburb')}
                getSuggestions={this.getPlaceSuggestions('(regions)')}
              />

              <AutoComplete
                label="State"
                value={state}
                onChange={this.onValueInputChange('state')}
                getSuggestions={this.getPlaceSuggestions('(regions)')}
              />

              <AutoComplete
                label="Postcode"
                value={postcode}
                onChange={this.onValueInputChange('postcode')}
                getSuggestions={this.getPlaceSuggestions('(regions)')}
              />

              <AutoComplete
                label="Country"
                value={country}
                onChange={this.onValueInputChange('country')}
                getSuggestions={this.getPlaceSuggestions('(regions)')}
              />

              <TextField
                fullWidth
                type="number"
                label="Division"
                value={division}
                onChange={this.onEventInputChange('division')}
                margin="normal"
              />

              <div className="with-button">
                <AutoComplete
                  label="Operator"
                  value={operator}
                  onChange={this.onValueInputChange('operator')}
                  getSuggestions={this.getOperatorSuggestions}
                />
                <IconButton
                  onClick={() => openDialog(OperatorsDialogContainer)}
                >
                  <AddBoxIcon />
                </IconButton>
              </div>
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
                onClick={this.submit}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledSiteForm>
    ) : (
      <LinearProgress />
    )
  }
}

// export const SiteForm = scriptLoader([
//   `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`,
// ])(SiteFormWithout)
