import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import BrushIcon from 'material-ui-icons/Brush'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { Carousel } from '../../../components/carousel/Carousel'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledMaintenanceIssueForm } from './StyledMaintenanceIssueForm'

export class Form extends Component {
  state = {
    finding: '',
    equipment: '',
    recommendations: '',
  }

  componentDidMount() {
    const { setRightNav, initialData } = this.props

    setRightNav && setRightNav()
    initialData && this.loadInitialData(initialData)
  }

  componentWillUnmount() {
    const { removeRightNav } = this.props
    removeRightNav && removeRightNav()
  }

  componentWillReceiveProps({ imageCaptured, initialData, images }) {
    !imageCaptured && initialData && this.loadInitialData(initialData)

    if (imageCaptured) {
      const { setFeedback, loadImages } = this.props
      const notPortrait = images.some(
        ({ imageNaturalAspectRatio }) => imageNaturalAspectRatio > 1
      )

      loadImages(images)

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
    this.setState({ equipment: value.equipment || value })
  }

  onSubmit = () => {
    const { onSubmit, setFeedback, images } = this.props
    const { finding, equipment, recommendations } = this.state

    if (images.length > 0 && finding && equipment && recommendations) {
      setFeedback({ error: '' })
      onSubmit({
        images: images.slice(0, 4),
        finding,
        equipment,
        recommendations,
      })
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { images, captureImage, equipments, error, match } = this.props
    const { finding, equipment, recommendations } = this.state

    return (
      <StyledMaintenanceIssueForm className="StyledMaintenanceIssueForm">
        <Card>
          {images &&
            images.length === 1 && (
              <img src={images[0].image} alt="equipment type" />
            )}
          {images && images.length > 1 && <Carousel images={images} />}

          <CardContent className="card-content">
            {images &&
              images.length > 0 && (
                <StyledNavLink
                  to={`${match.url}/editImages`}
                  className="edit-icon"
                >
                  <Button
                    variant="fab"
                    color="primary"
                    aria-label="edit compliance issue"
                  >
                    <BrushIcon />
                  </Button>
                </StyledNavLink>
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
