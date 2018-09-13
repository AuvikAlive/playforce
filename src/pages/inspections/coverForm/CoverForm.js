import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CropIcon from '@material-ui/icons/Crop'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { DatePicker } from 'material-ui-pickers'
import { AddSiteDialogContainer } from '../../../components/addSiteDialog/AddSiteDialogContainer'
import { ClientsDialogContainer } from '../../../components/clientsDialog/ClientsDialogContainer'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ImageLightbox } from '../../../components/imageLightbox/ImageLightbox'
import {
  showContentWhenLoaded,
  onEventInputChange,
  onValueInputChange,
  onSingleCrop,
} from '../../../functions/'
import {
  contextTypesUnsubscriber,
  defaultInspectionTypes,
} from '../../../constants/'
import { StyledCoverForm } from './StyledCoverForm'
import { state } from './state'
import {
  onComponentDidMount,
  onComponentWillReceiveProps,
  getLocationSuggestions,
  getClientSuggestions,
  onClientSelect,
  submit,
} from './functions/'

export class CoverForm extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  render() {
    const {
      location,
      client,
      inspectionDate,
      appliedStandards,
      inspectionType,
      displayName,
    } = this.state

    const {
      image,
      captureImage,
      sitesLoaded,
      standardsLoaded,
      standards,
      clientsLoaded,
      inspectionTypesLoaded,
      inspectionTypes,
      openDialog,
      closeDialog,
      error,
      loading,
      buttonText,
    } = this.props

    const isLoaded =
      sitesLoaded && standardsLoaded && clientsLoaded && inspectionTypesLoaded

    return showContentWhenLoaded(
      isLoaded,
      <StyledCoverForm className="StyledCoverForm">
        <Card className="card">
          <div className="card-media">
            {image && <img src={image} alt="cover" />}
            {image && <ImageLightbox images={[image]} />}
          </div>

          <CardContent className="card-content">
            {image && (
              <Button
                variant="fab"
                color="primary"
                aria-label="crop image"
                className="floating-icon"
                onClick={onSingleCrop(this)}
              >
                <CropIcon />
              </Button>
            )}

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
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
                  onChange={onValueInputChange(this, 'location')}
                  getSuggestions={getLocationSuggestions(this)}
                />
                <IconButton
                  onClick={() =>
                    openDialog(
                      <AddSiteDialogContainer closeDialog={closeDialog} />
                    )
                  }
                >
                  <AddBoxIcon />
                </IconButton>
              </div>

              <div className="with-button with-autocomplete">
                <AutoComplete
                  label="Client"
                  value={client}
                  onChange={onValueInputChange(this, 'client')}
                  onSuggestionSelect={onClientSelect(this)}
                  getSuggestions={getClientSuggestions(this)}
                />
                <IconButton
                  onClick={() =>
                    openDialog(
                      <ClientsDialogContainer closeDialog={closeDialog} />
                    )
                  }
                >
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
                onChange={onValueInputChange(this, 'inspectionDate')}
                animateYearScrolling={false}
              />

              <TextField
                fullWidth
                label="Inspected By"
                value={displayName || this.props.displayName}
                onChange={onEventInputChange(this, 'displayName')}
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
                onChange={onEventInputChange(this, 'appliedStandards')}
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
                onChange={onEventInputChange(this, 'inspectionType')}
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
                onClick={submit(this)}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledCoverForm>
    )
  }
}

CoverForm.contextTypes = contextTypesUnsubscriber
