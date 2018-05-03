import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { CircularProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import AddBoxIcon from 'material-ui-icons/AddBox'
import scriptLoader from 'react-async-script-loader'
import { OperatorsDialogContainer } from '../operatorsDialog/OperatorsDialogContainer'
// import { AutoComplete } from '../autoComplete/AutoComplete'
import { onEventInputChange } from '../../utilities/onEventInputChange'
import { onValueInputChange } from '../../utilities/onValueInputChange'
import { key } from '../../config/googleMaps'
import { StyledSiteForm } from './StyledSiteForm'

class SiteFormWithout extends Component {
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
  }

  async componentDidMount() {
    const {
      userId,
      operatorsLoaded,
      fetchOperatorsRealTime,
      initialData,
    } = this.props

    !operatorsLoaded && fetchOperatorsRealTime(userId)
    initialData && this.loadInitialData(initialData)

    'geolocation' in navigator &&
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          this.setState({
            latitude: latitude.toFixed(5),
            longitude: longitude.toFixed(5),
          })
        },
        error => console.log(error)
      )
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

  // onSearch = event => {
  //   this.setState({ name: event.target.value }, () => {
  //     const { name, latitude, longitude } = this.state
  //     const location = new window.google.maps.LatLng(latitude, longitude)
  //     const request = {
  //       location,
  //       radius: '500',
  //     }
  //     const map = new window.google.maps.Map(document.createElement('div'), {
  //       center: location,
  //       zoom: 15,
  //     })

  //     let service = new window.google.maps.places.PlacesService(map)

  //     service.nearbySearch(request, (results, status) => {
  //       if (status === window.google.maps.places.PlacesServiceStatus.OK) {
  //         console.log(results)
  //       }
  //     })
  //   })
  // }

  submit = async () => {
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
    const { onSubmit, afterSubmit, userId, setFeedback } = this.props

    if (name && street && suburb && state && postcode && country && operator) {
      setFeedback({ error: '', loading: true })

      try {
        const site = {
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
      // latitude,
      // longitude,
      division,
      operator,
    } = this.state
    const {
      operatorsLoaded,
      operators,
      openDialog,
      buttonText,
      error,
      loading,
      // isScriptLoaded,
      // isScriptLoadSucceed,
    } = this.props

    return operatorsLoaded ? (
      <StyledSiteForm className="StyledSiteForm">
        <Card>
          <CardContent>
            <form noValidate>
              {/* <AutoComplete
                label="Name"
                value={name}
                onChange={this.onValueInputChange('name')}
                getSuggestions={this.getLocationSuggestions}
              /> */}

              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={this.onEventInputChange('name')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Street"
                value={street}
                onChange={this.onEventInputChange('street')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Suburb"
                value={suburb}
                onChange={this.onEventInputChange('suburb')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="State"
                value={state}
                onChange={this.onEventInputChange('state')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Postcode"
                value={postcode}
                onChange={this.onEventInputChange('postcode')}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Country"
                value={country}
                onChange={this.onEventInputChange('country')}
                margin="normal"
              />

              {/* <TextField
                fullWidth
                type="number"
                label="Latitude"
                value={latitude}
                onChange={this.onEventInputChange('latitude')}
                margin="normal"
              />

              <TextField
                fullWidth
                type="number"
                label="Longitude"
                value={longitude}
                onChange={this.onEventInputChange('longitude')}
                margin="normal"
              /> */}

              <TextField
                fullWidth
                type="number"
                label="Division"
                value={division}
                onChange={this.onEventInputChange('division')}
                margin="normal"
              />

              <div className="with-button">
                <TextField
                  fullWidth
                  select
                  label="Operator"
                  value={operator}
                  onChange={this.onEventInputChange('operator')}
                  margin="normal"
                >
                  {operators.length > 0 ? (
                    operators.map(({ name }, index) => (
                      <MenuItem key={index} value={name}>
                        {name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">No operator addded</MenuItem>
                  )}
                </TextField>

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

export const SiteForm = scriptLoader([
  `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`,
])(SiteFormWithout)
