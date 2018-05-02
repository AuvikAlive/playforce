import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import BrushIcon from 'material-ui-icons/Brush'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { Carousel } from '../../../components/carousel/Carousel'
import { Sketch } from '../../../components/sketch/Sketch'
import { onInputChange } from '../../../utilities/onInputChange'
import { StyledMaintenanceIssueForm } from './StyledMaintenanceIssueForm'

export class MaintenanceIssueForm extends Component {
  state = {
    finding: '',
    equipment: '',
    recommendations: '',
    images: [],
  }

  componentDidMount() {
    const {
      setRightNav,
      initialData,
      equipmentsSite,
      siteId,
      fetchEquipmentsRealTime,
      userId,
    } = this.props

    setRightNav && setRightNav()
    equipmentsSite !== siteId && fetchEquipmentsRealTime(userId, siteId)
    initialData && this.loadInitialData(initialData)
  }

  componentWillUnmount() {
    const { removeRightNav } = this.props
    removeRightNav && removeRightNav()
  }

  componentWillReceiveProps({ imageCaptured, initialData, images }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }

    if (imageCaptured && images !== this.props.images) {
      const { setFeedback } = this.props
      const notPortrait = images.some(
        ({ imageNaturalAspectRatio }) => imageNaturalAspectRatio > 1
      )

      this.loadImages(images)

      if (images.length > 4 && notPortrait) {
        setFeedback({
          error: 'Please upload no more than 4 portrait image(s)!',
        })
      } else if (images.length > 4) {
        setFeedback({
          error: 'Please upload no more than 4 image(s)!',
        })
      } else if (notPortrait) {
        setFeedback({ error: 'Please upload portrait image(s)!' })
      } else {
        setFeedback({ error: '' })
      }
    }
  }

  onInputChange = onInputChange

  loadInitialData = data => {
    this.setState({
      ...data,
    })
  }

  onAutoCompleteChange = value => {
    this.setState({ equipment: value.equipment || value })
  }

  loadImages = images => {
    this.setState({ images })
  }

  saveImages = images => {
    const { closeDialog } = this.props

    this.loadImages(images)
    closeDialog()
  }

  submit = async () => {
    const { onSubmit, afterSubmit, setFeedback } = this.props
    const { images, finding, equipment, recommendations } = this.state

    if (images.length > 0 && finding && equipment && recommendations) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          images: images.slice(0, 4),
          finding,
          equipment,
          recommendations,
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
      captureImage,
      equipments,
      error,
      loading,
      buttonText,
      openDialog,
      closeDialog,
      equipmentsLoaded,
    } = this.props
    const { images, finding, equipment, recommendations } = this.state
    const imagesCopy =
      images &&
      images.map(({ image, imageNaturalAspectRatio }) =>
        Object.assign({}, { image, imageNaturalAspectRatio })
      )

    return equipmentsLoaded ? (
      <StyledMaintenanceIssueForm className="StyledMaintenanceIssueForm">
        <Card>
          {images &&
            images.length === 1 && (
              <img src={images[0].image} alt="equipment type" />
            )}
          {images && images.length > 1 && <Carousel images={images} />}

          <CardContent className="card-content">
            {imagesCopy &&
              imagesCopy.length > 0 && (
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="edit compliance issue"
                  className="edit-icon"
                  onClick={() =>
                    openDialog(() => (
                      <Sketch
                        aspectRatio={188 / 253}
                        images={imagesCopy}
                        onSubmit={this.saveImages}
                        closeDialog={closeDialog}
                      />
                    ))
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
                captureImage({ width: 188, height: 253, multiple: true })
              }
            >
              Capture Image(s)
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                onChange={this.onAutoCompleteChange}
                domain={equipments}
                label="Equipment"
                value={equipment}
                filterProperty="equipment"
              />

              <TextField
                fullWidth
                multiline
                label="Finding"
                value={finding}
                margin="normal"
                onChange={this.onInputChange('finding')}
              />

              <TextField
                fullWidth
                multiline
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={this.onInputChange('recommendations')}
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
                onClick={this.submit}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledMaintenanceIssueForm>
    ) : (
      <LinearProgress />
    )
  }
}
