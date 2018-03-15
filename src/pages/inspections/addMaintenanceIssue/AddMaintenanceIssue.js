import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { StyledAddMaintenanceIssue } from './StyledAddMaintenanceIssue'

export class AddMaintenanceIssue extends Component {
  state = {
    image: null,
    finding: '',
    recommendations: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context

    setNavTitle('Add Maintenance Issue')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="go back"
        onClick={this.addMaintenanceIssue}
      >
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  capture = () => {
    this.fileInput.click()
  }

  getFile = event => {
    const reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])

    reader.addEventListener(
      'load',
      () => {
        this.setState({ image: reader.result })
      },
      false,
    )
  }

  addMaintenanceIssue = () => {
    const { history, addMaintenanceIssue } = this.props
    const { image, finding, recommendations } = this.state

    if (image && finding && recommendations) {
      addMaintenanceIssue({ image, finding, recommendations })
    }

    history.goBack()
  }

  render() {
    const { image, finding, recommendations } = this.state

    return (
      <StyledAddMaintenanceIssue className="StyledAddMaintenanceIssue">
        <Card>
          {image && <CardMedia className="card-media" image={image} />}
          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.capture}
            >
              Capture Image
            </Button>

            <form noValidate>
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
          </CardContent>
        </Card>
        <input
          type="file"
          accept="image/*"
          // capture="environment"
          style={{ display: 'none' }}
          ref={input => {
            this.fileInput = input
          }}
          onChange={this.getFile}
        />
      </StyledAddMaintenanceIssue>
    )
  }
}

AddMaintenanceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
