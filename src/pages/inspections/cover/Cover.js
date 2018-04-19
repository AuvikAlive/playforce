import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
import DateRangeIcon from 'material-ui-icons/DateRange'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { DatePicker } from 'material-ui-pickers'
import isEmpty from 'lodash/isEmpty'
import { StyledCover } from './StyledCover'

export class Cover extends Component {
  state = {
    location: '',
    client: '',
    inspectionDate: new Date(),
    appliedStandards: [],
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      cover,
      fetchSites,
      fetchStandards,
      fetchClients,
      userId,
      history,
      setCapturedImage,
    } = this.props

    if (!isEmpty(cover)) {
      const { image } = cover

      setCapturedImage(image)

      this.setState({
        ...cover,
        location: cover.location.id,
      })
    }

    setNavTitle('Add Cover')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    fetchSites(userId)
    fetchStandards(userId)
    fetchClients(userId)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  componentWillReceiveProps({ imageNaturalAspectRatio }) {
    if (imageNaturalAspectRatio) {
      const { setFeedback } = this.props

      imageNaturalAspectRatio <= 1
        ? setFeedback({ error: 'Please upload a landscape image!' })
        : setFeedback({ error: '' })
    }
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onDateChange = date => {
    this.setState({ inspectionDate: date })
  }

  addInspectionCover = () => {
    const {
      addInspectionCover,
      history,
      setFeedback,
      image,
      displayName,
      sites,
      userId,
      fetchEquipments,
    } = this.props
    const { location, client, inspectionDate, appliedStandards } = this.state

    if (
      image &&
      location &&
      client &&
      inspectionDate &&
      appliedStandards.length > 0
    ) {
      addInspectionCover({
        image,
        location: sites.filter(({ id }) => id === location)[0],
        client,
        inspectionDate,
        appliedStandards,
        displayName,
      })
      fetchEquipments(userId, location)
      history.goBack()
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
      error,
    } = this.props

    return sitesLoaded && standardsLoaded && clientsLoaded ? (
      <StyledCover className="StyledCover">
        <Card>
          {image && (
            <img
              ref={element => {
                this.image = element
              }}
              src={image}
              alt="cover"
            />
          )}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() => captureImage({ width: 764, height: 432 })}
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>
            <form noValidate>
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

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.addInspectionCover}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledCover>
    ) : (
      <LinearProgress />
    )
  }
}

Cover.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
