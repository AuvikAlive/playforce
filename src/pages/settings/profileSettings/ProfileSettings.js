import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import SignaturePad from 'react-signature-pad'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { StyledProfileSettings } from './StyledProfileSettings'

export class ProfileSettings extends Component {
  state = {
    displayName: '',
    image: null,
    displayImage: null,
    title: '',
    company: '',
    mobile: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      history,
      setCapturedImage,
      profile: {
        displayName,
        image,
        title = '',
        company = '',
        mobile = '',
        signature,
      },
    } = this.props

    setNavTitle('Profile Settings')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    this.setState({ displayName, image, title, company, mobile })
    setCapturedImage(image)
    signature && this.mySignature.fromDataURL(signature)
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

  publish = async () => {
    const { displayName, title, company, mobile } = this.state
    const { firebase, setErrorLoadingState, history, image } = this.props

    setErrorLoadingState({ error: '', loading: true })

    let data = {
      displayName,
      title,
      company,
      mobile,
      image,
    }

    if (!this.mySignature.isEmpty()) {
      data.signature = this.mySignature.toDataURL()
    }

    try {
      await firebase.updateProfile(data)

      setErrorLoadingState({ loading: false })
      history.goBack()
    } catch (error) {
      setErrorLoadingState({ error: error.message, loading: false })
    }
  }

  render() {
    const { displayName, title, company, mobile } = this.state

    const { image, captureImage, error, loading } = this.props

    return (
      <StyledProfileSettings className="StyledProfileSettings">
        <Card>
          {image && <img src={image} alt="user" />}

          <CardContent>
            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={captureImage}
              >
                Upload Image
              </Button>
            )}

            <TextField
              fullWidth
              label="Name"
              value={displayName}
              onChange={this.onInputChange('displayName')}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={this.onInputChange('title')}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Company"
              value={company}
              onChange={this.onInputChange('company')}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Mobile"
              value={mobile}
              onChange={this.onInputChange('mobile')}
              margin="normal"
            />

            <FormControl fullWidth>
              <InputLabel
                shrink={false}
                focused={false}
                className="signature-label"
              >
                <div>Signature</div>
                <Button onClick={() => this.mySignature.clear()}>Clear</Button>
              </InputLabel>
              <SignaturePad
                ref={input => {
                  this.mySignature = input
                }}
              />
            </FormControl>

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
                onClick={this.publish}
              >
                Publish Changes
              </Button>
            )}
          </CardContent>

          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={input => {
              this.fileInput = input
            }}
            onChange={this.getFile}
          />
        </Card>
      </StyledProfileSettings>
    )
  }
}

ProfileSettings.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
