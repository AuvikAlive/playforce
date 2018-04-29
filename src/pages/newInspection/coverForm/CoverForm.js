import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { CircularProgress } from 'material-ui/Progress'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import AddBoxIcon from 'material-ui-icons/AddBox'
import DateRangeIcon from 'material-ui-icons/DateRange'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { DatePicker } from 'material-ui-pickers'
import { isEmpty } from 'lodash'
import { AddSiteContainer } from '../addSite/AddSiteContainer'
import { ClientsContainer } from '../clients/ClientsContainer'
import { StyledCoverForm } from './StyledCoverForm'

export class CoverForm extends Component {
  state = {
    location: '',
    client: '',
    inspectionDate: new Date(),
    appliedStandards: [],
  }

  componentDidMount() {
    const {
      initialData,
      sitesLoaded,
      fetchSitesRealTime,
      standardsLoaded,
      fetchStandardsRealTime,
      clientsLoaded,
      fetchClientsRealTime,
      userId,
    } = this.props

    !isEmpty(initialData) && this.loadInitialData(initialData)
    !sitesLoaded && fetchSitesRealTime(userId)
    !standardsLoaded && fetchStandardsRealTime(userId)
    !clientsLoaded && fetchClientsRealTime(userId)
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
      location: initialData.location.id,
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onDateChange = date => {
    this.setState({ publishDate: date })
  }

  submit = async () => {
    const { onSubmit, setFeedback, image, displayName, sites } = this.props
    const { location, client, inspectionDate, appliedStandards } = this.state

    if (
      image &&
      location &&
      client &&
      inspectionDate &&
      appliedStandards.length > 0
    ) {
      setFeedback({ error: '', loading: true })

      try {
        await onSubmit({
          image,
          displayName,
          location: sites.filter(({ id }) => id === location)[0],
          client,
          inspectionDate,
          appliedStandards,
        })

        setFeedback({ loading: false })
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
    const { location, client, inspectionDate, appliedStandards } = this.state
    const {
      image,
      captureImage,
      displayName,
      sitesLoaded,
      sites,
      standardsLoaded,
      standards,
      clientsLoaded,
      clients,
      openDialog,
      error,
      loading,
      buttonText,
    } = this.props

    return sitesLoaded && standardsLoaded && clientsLoaded ? (
      <StyledCoverForm className="StyledCoverForm">
        <Card>
          {image && <img src={image} alt="cover" />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
                captureImage({ width: 500, height: 500 * 432 / 764 })
              }
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>
            <form noValidate>
              <div className="with-button">
                <TextField
                  fullWidth
                  select
                  label="Location"
                  value={location}
                  onChange={this.onInputChange('location')}
                  margin="normal"
                >
                  {sites.length > 0 ? (
                    sites.map(({ id, name }) => (
                      <MenuItem key={id} value={id}>
                        {name}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">No site addded</MenuItem>
                  )}
                </TextField>

                <IconButton onClick={() => openDialog(AddSiteContainer)}>
                  <AddBoxIcon />
                </IconButton>
              </div>

              <div className="with-button">
                <TextField
                  fullWidth
                  select
                  label="Client"
                  value={client}
                  onChange={this.onInputChange('client')}
                  margin="normal"
                >
                  {clients.length > 0 ? (
                    clients.map(({ name }, index) => {
                      return (
                        <MenuItem key={index} value={name}>
                          {name}
                        </MenuItem>
                      )
                    })
                  ) : (
                    <MenuItem value="">No client addded</MenuItem>
                  )}
                </TextField>

                <IconButton onClick={() => openDialog(ClientsContainer)}>
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
                onChange={this.onDateChange}
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
                onChange={this.onInputChange('appliedStandards')}
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
