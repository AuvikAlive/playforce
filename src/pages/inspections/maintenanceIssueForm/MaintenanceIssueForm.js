import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import BrushIcon from '@material-ui/icons/Brush'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { Carousel } from '../../../components/carousel/Carousel'
import { Sketch } from '../../../components/sketch/Sketch'
import { contextTypesUnsubscriber } from '../../../constants/'
import {
  onEventInputChange,
  onValueInputChange,
  saveEditedImages,
  getEquipmentSuggestions,
  getImagesCopy,
  showContentWhenLoaded,
} from '../../../functions/'
import { StyledMaintenanceIssueForm } from './StyledMaintenanceIssueForm'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  onComponentWillReceiveProps,
  submit,
} from './functions/'

export class MaintenanceIssueForm extends Component {
  state = {
    finding: '',
    equipment: '',
    recommendations: '',
    images: [],
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  render() {
    const {
      captureImage,
      error,
      loading,
      buttonText,
      openDialog,
      closeDialog,
      equipmentsLoaded,
    } = this.props

    const { images, finding, equipment, recommendations } = this.state

    const imagesCopy = getImagesCopy(images)

    const imagesLoaded = images && images.length > 0

    return showContentWhenLoaded(
      equipmentsLoaded,
      <StyledMaintenanceIssueForm className="StyledMaintenanceIssueForm">
        <Card className="card">
          {/* {images &&
            images.length === 1 && (
              <img src={images[0].image} alt="equipment type" />
            )} */}
          {imagesLoaded && <Carousel images={images} showLightbox />}

          <CardContent className="card-content">
            {imagesLoaded && (
              <Button
                variant="fab"
                color="primary"
                aria-label="edit compliance issue"
                className="floating-icon"
                onClick={() =>
                  openDialog(
                    <Sketch
                      aspectRatio={188 / 253}
                      images={imagesCopy}
                      onSubmit={saveEditedImages(this)}
                      closeSketchDialog={closeDialog}
                    />
                  )
                }
              >
                <BrushIcon />
              </Button>
            )}

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
                // captureImage({ width: 188, height: 253, multiple: true })
                captureImage({
                  width: 1024,
                  height: (1024 * 253) / 188,
                  multiple: true,
                })
              }
            >
              Capture Image(s)
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                label="Equipment"
                value={equipment}
                onChange={onValueInputChange(this, 'equipment')}
                getSuggestions={getEquipmentSuggestions(this)}
              />

              <TextField
                fullWidth
                multiline
                label="Finding"
                value={finding}
                margin="normal"
                onChange={onEventInputChange(this, 'finding')}
              />

              <TextField
                fullWidth
                multiline
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={onEventInputChange(this, 'recommendations')}
              />
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
      </StyledMaintenanceIssueForm>
    )
  }
}

MaintenanceIssueForm.contextTypes = contextTypesUnsubscriber
