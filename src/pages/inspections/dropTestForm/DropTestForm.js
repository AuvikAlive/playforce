import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { withImageCapture } from '../../../hocs/withImageCapture/withImageCapture'
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait'
import { onEventInputChange } from '../../../functions/onEventInputChange'
import { StyledDropTestForm } from './StyledDropTestForm'

class DropTestFormWithout extends Component {
  state = {
    location: '',
    dropHeight: '',
    hic: '',
    hicDuration: '',
    gmax: '',
  }

  componentDidMount() {
    const { initialData } = this.props

    initialData && this.loadInitialData(initialData)
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

      imageNaturalAspectRatio >= 1
        ? setFeedback({ error: 'Please upload a portrait image!' })
        : setFeedback({ error: '' })
    }
  }

  loadInitialData = initialData => {
    const { image } = initialData
    const { setCapturedImage } = this.props

    setCapturedImage(image)

    this.setState({ ...initialData })
  }

  onEventInputChange = onEventInputChange

  getResult = (hic, hicDuration, gmax) => {
    return hic &&
      Number(hic) <= 1000 &&
      hicDuration &&
      Number(hicDuration) > 3 &&
      gmax &&
      Number(gmax) <= 200
      ? 'Satisfactory'
      : 'Not Satisfactory'
  }

  submit = async () => {
    const { dropHeight, location, hic, hicDuration, gmax } = this.state
    const { setFeedback, onSubmit, afterSubmit, image } = this.props

    if (image && location && dropHeight && hic && hicDuration && gmax) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          image,
          location,
          dropHeight,
          hic,
          hicDuration,
          gmax,
          result: this.getResult(hic, hicDuration, gmax),
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
    const { location, dropHeight, hic, hicDuration, gmax } = this.state
    const { image, captureImage, buttonText, error, loading } = this.props
    const result = this.getResult(hic, hicDuration, gmax)

    return (
      <StyledDropTestForm className="StyledDropTestForm">
        <Card className="card">
          {image && <img src={image} alt="cover" />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() => captureImage()}
            >
              Capture Image
              <StayCurrentPortraitIcon className="button-icon" />
            </Button>

            <form noValidate>
              <TextField
                fullWidth
                margin="normal"
                label="Location"
                value={location}
                onChange={this.onEventInputChange('location')}
              />

              <TextField
                fullWidth
                type="number"
                margin="normal"
                label="Drop Height (cm)"
                value={dropHeight}
                onChange={this.onEventInputChange('dropHeight')}
              />

              <TextField
                fullWidth
                type="number"
                margin="normal"
                label="HIC"
                value={hic}
                onChange={this.onEventInputChange('hic')}
              />

              <TextField
                fullWidth
                type="number"
                margin="normal"
                label="HIC Duration (ms)"
                value={hicDuration}
                onChange={this.onEventInputChange('hicDuration')}
              />

              <TextField
                fullWidth
                type="number"
                margin="normal"
                label="Gmax (g)"
                value={gmax}
                onChange={this.onEventInputChange('gmax')}
              />

              <TextField
                fullWidth
                disabled
                margin="normal"
                label="Result"
                value={result}
                onChange={this.onEventInputChange('result')}
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
      </StyledDropTestForm>
    )
  }
}

export const DropTestForm = withFeedback(withImageCapture(DropTestFormWithout))
