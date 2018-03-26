import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
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

  loadInitialData = maintenanceIssue => {
    const { setCapturedImage } = this.props
    const { image } = maintenanceIssue

    setCapturedImage(image)
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
    const { onSubmit, setErrorLoadingState, image } = this.props
    const { finding, equipment, recommendations } = this.state

    if (image && finding && equipment && recommendations) {
      setErrorLoadingState({ error: '' })
      onSubmit({ image, finding, equipment, recommendations })
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { image, captureImage, equipments, error } = this.props
    const { finding, equipment, recommendations } = this.state

    return (
      <StyledMaintenanceIssueForm className="StyledMaintenanceIssueForm">
        <Card>
          {image && <CardMedia className="card-media" image={image} />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={captureImage}
            >
              Capture Image
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
                rows="3"
                label="Finding"
                value={finding}
                margin="normal"
                onChange={this.onInputChange('finding')}
              />

              <TextField
                fullWidth
                multiline
                rows="3"
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
