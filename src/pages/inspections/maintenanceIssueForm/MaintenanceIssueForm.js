import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { Carousel } from '../../../components/carousel/Carousel'
import { StyledMaintenanceIssueForm } from './StyledMaintenanceIssueForm'

export class MaintenanceIssueForm extends Component {
  state = {
    finding: '',
    equipment: '',
    recommendations: '',
  }

  componentDidMount() {
    const { initialData } = this.props

    initialData && this.loadInitialData(initialData)
  }

  componentWillReceiveProps({ imageCaptured, images }) {
    if (imageCaptured) {
      const { setErrorLoadingState } = this.props
      const notPortrait = images.some(
        ({ imageNaturalAspectRatio }) => imageNaturalAspectRatio > 1,
      )

      if (images.length > 4 && notPortrait) {
        setErrorLoadingState({
          error: 'Please upload no more than 4 portrait image(s)!',
        })
      } else if (images.length > 4) {
        setErrorLoadingState({
          error: 'Please upload no more than 4 image(s)!',
        })
      } else if (notPortrait) {
        setErrorLoadingState({ error: 'Please upload portrait image(s)!' })
      } else {
        setErrorLoadingState({ error: '' })
      }
    }
  }

  loadInitialData = maintenanceIssue => {
    const { setCapturedImage } = this.props
    const { images } = maintenanceIssue

    setCapturedImage(images)
    this.setState({
      ...maintenanceIssue,
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onAutoCompleteChange = value => {
    this.setState({ equipment: value })
  }

  onSubmit = () => {
    const { onSubmit, setErrorLoadingState, images } = this.props
    const { finding, equipment, recommendations } = this.state

    if (images.length > 0 && finding && equipment && recommendations) {
      setErrorLoadingState({ error: '' })
      onSubmit({ images, finding, equipment, recommendations })
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { images, captureImage, equipments, error } = this.props
    const { finding, equipment, recommendations } = this.state

    return (
      <StyledMaintenanceIssueForm className="StyledMaintenanceIssueForm">
        <Card>
          {images &&
            images.length === 1 && (
              <img src={images[0].image} alt="equipment type" />
            )}
          {images && images.length > 1 && <Carousel images={images} />}

          <CardContent>
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

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.onSubmit}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledMaintenanceIssueForm>
    )
  }
}
