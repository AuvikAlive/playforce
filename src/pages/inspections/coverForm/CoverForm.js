import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { DatePicker } from 'material-ui-pickers'
import { isEmpty } from 'lodash'
import { AddSiteDialogContainer } from '../../../components/addSiteDialog/AddSiteDialogContainer'
import { ClientsDialogContainer } from '../../../components/clientsDialog/ClientsDialogContainer'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { onEventInputChange } from '../../../functions/onEventInputChange'
import { onValueInputChange } from '../../../functions/onValueInputChange'
import { defaultInspectionTypes } from '../../../globals/constants'
import { StyledCoverForm } from './StyledCoverForm'

export class CoverForm extends Component {
  state = {
    location: '',
    client: '',
    inspectionDate: new Date(),
    appliedStandards: [],
    inspectionType: '',
  }

  async componentDidMount() {
    const {
      initialData,
      sitesLoaded,
      fetchSitesRealTime,
      standardsLoaded,
      fetchStandardsRealTime,
      clientsLoaded,
      fetchClientsRealTime,
      inspectionTypesLoaded,
      fetchInspectionTypesRealTime,
      userId,
    } = this.props

    const { addUnsubscriber } = this.context

    !isEmpty(initialData) && this.loadInitialData(initialData)
    !sitesLoaded && addUnsubscriber(await fetchSitesRealTime(userId))
    !standardsLoaded && addUnsubscriber(await fetchStandardsRealTime(userId))
    !clientsLoaded && addUnsubscriber(await fetchClientsRealTime(userId))
    !inspectionTypesLoaded &&
      addUnsubscriber(await fetchInspectionTypesRealTime(userId))
  }

  componentWillReceiveProps({
    initialData,
    imageCaptured,
    image,
    imageNaturalAspectRatio,
  }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }

    if (imageCaptured && image !== this.props.image) {
      const { setFeedback } = this.props

      imageNaturalAspectRatio <= 1
        ? setFeedback({ error: 'Please upload a landscape image!' })
        : setFeedback({ error: '' })
    }
  }

  loadInitialData = initialData => {
    const { image } = initialData
    const { setCapturedImage } = this.props

    setCapturedImage(image)

    this.setState({
      ...initialData,
      location: initialData.location.name,
    })
  }

  onEventInputChange = onEventInputChange
  onValueInputChange = onValueInputChange

  getLocationSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { sites } = this.props

    return inputLength === 0
      ? sites.map(item => item.name)
      : sites
          .filter(
            item => item.name.toLowerCase().slice(0, inputLength) === inputValue
          )
          .map(item => item.name)
  }

  getClientSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { clients } = this.props

    return inputLength === 0
      ? clients.map(item => item.name)
      : clients
          .filter(
            item => item.name.toLowerCase().slice(0, inputLength) === inputValue
          )
          .map(item => item.name)
  }

  submit = async () => {
    const {
      onSubmit,
      afterSubmit,
      setFeedback,
      image,
      displayName,
      sites,
    } = this.props
    const {
      location,
      client,
      inspectionDate,
      appliedStandards,
      inspectionType,
    } = this.state

    if (
      location &&
      client &&
      inspectionDate &&
      appliedStandards.length > 0 &&
      inspectionType
    ) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          image,
          displayName,
          location: sites.find(({ name }) => name === location),
          client,
          inspectionDate,
          appliedStandards,
          inspectionType,
        })
        setFeedback({ loading: false })
        afterSubmit && afterSubmit(result)
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const {
      location,
      client,
      inspectionDate,
      appliedStandards,
      inspectionType,
    } = this.state
    const {
      image,
      captureImage,
      displayName,
      sitesLoaded,
      standardsLoaded,
      standards,
      clientsLoaded,
      inspectionTypesLoaded,
      inspectionTypes,
      openDialog,
      error,
      loading,
      buttonText,
    } = this.props

    return sitesLoaded &&
      standardsLoaded &&
      clientsLoaded &&
      inspectionTypesLoaded ? (
      <StyledCoverForm className="StyledCoverForm">
        <Card className="card">
          {image && <img src={image} alt="cover" />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
                // captureImage({ width: 500, height: 500 * 432 / 764 })
                captureImage({ width: 1024, height: (1024 * 432) / 764 })
              }
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>
            <form noValidate>
              <div className="with-button with-autocomplete">
                <AutoComplete
                  label="Location"
                  value={location}
                  onChange={this.onValueInputChange('location')}
                  getSuggestions={this.getLocationSuggestions}
                />
                <IconButton onClick={() => openDialog(AddSiteDialogContainer)}>
                  <AddBoxIcon />
                </IconButton>
              </div>

              <div className="with-button with-autocomplete">
                <AutoComplete
                  label="Client"
                  value={client}
                  onChange={this.onValueInputChange('client')}
                  getSuggestions={this.getClientSuggestions}
                />
                <IconButton onClick={() => openDialog(ClientsDialogContainer)}>
                  <AddBoxIcon />
                </IconButton>
              </div>

              <DatePicker
                fullWidth
                keyboard
                clearable
                className="date-picker"
                label="Inspection Date"
                format="DD MMMM YYYY"
                value={inspectionDate}
                keyboardIcon={<DateRangeIcon />}
                leftArrowIcon={<ArrowBackIcon />}
                rightArrowIcon={<ArrowForwardIcon />}
                onChange={this.onValueInputChange('inspectionDate')}
                animateYearScrolling={false}
              />

              <TextField
                fullWidth
                label="Inspected By"
                value={displayName}
                margin="normal"
              />

              <TextField
                fullWidth
                select
                SelectProps={{
                  multiple: true,
                }}
                label="Applied Standard"
                value={appliedStandards}
                onChange={this.onEventInputChange('appliedStandards')}
                margin="normal"
              >
                {standards.length > 0 ? (
                  standards.map(({ title, code, publishDate, id }, index) => {
                    return (
                      <MenuItem key={index} value={id}>
                        {`${title} ${code}`}
                      </MenuItem>
                    )
                  })
                ) : (
                  <MenuItem value="">No standards addded</MenuItem>
                )}
              </TextField>

              <TextField
                fullWidth
                select
                label="Inspection Type"
                value={inspectionType}
                onChange={this.onEventInputChange('inspectionType')}
                margin="normal"
              >
                {inspectionTypes.length > 0
                  ? inspectionTypes.map(({ name, id }) => {
                      return (
                        <MenuItem key={id} value={name}>
                          {name}
                        </MenuItem>
                      )
                    })
                  : defaultInspectionTypes.map((type, index) => {
                      return (
                        <MenuItem key={index} value={type}>
                          {type}
                        </MenuItem>
                      )
                    })}
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
                onClick={this.submit}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledCoverForm>
    ) : (
      <LinearProgress />
    )
  }
}

CoverForm.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
