import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import SignaturePad from 'react-signature-pad'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { StyledProfileSettings } from './StyledProfileSettings'
import avatar from './avatar.jpg'

export class ProfileSettings extends Component {
  state = {
    displayName: '',
    photoURL: '',
    displayImage: null,
    title: '',
    company: '',
    mobile: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      history,
      profile: {
        displayName,
        photoURL,
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

    this.setState({ displayName, photoURL, title, company, mobile })
    signature && this.mySignature.fromDataURL(signature)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  upload = () => {
    this.fileInput.click()
  }

  getFile = event => {
    const displayImage = event.target.files[0]
    const photoURL = URL.createObjectURL(displayImage)

    this.setState({ displayImage, photoURL })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  publish = async () => {
    const { displayImage } = this.state
    const { firebase, uid, setErrorLoadingState } = this.props

    setErrorLoadingState({ error: '', loading: true })

    if (displayImage) {
      const storageRef = firebase.storage().ref()
      const imageRef = storageRef.child(`images/${uid}.jpg`)

      try {
        const { downloadURL } = await imageRef.put(displayImage)

        this.updateProfile(downloadURL)
      } catch (error) {
        setErrorLoadingState({ error: error.message, loading: false })
      }
    } else {
      this.updateProfile()
    }
  }

  updateProfile = async downloadURL => {
    const { displayName, photoURL, title, company, mobile } = this.state
    const { firebase, setErrorLoadingState, history } = this.props

    try {
      await firebase.updateProfile({
        displayName,
        title,
        company,
        mobile,
        photoURL: downloadURL || photoURL,
        signature: !this.mySignature.isEmpty()
          ? this.mySignature.toDataURL()
          : undefined,
      })
      setErrorLoadingState({ loading: false })
      history.goBack()
    } catch (error) {
      setErrorLoadingState({ error: error.message, loading: false })
    }
  }

  render() {
    const { displayName, photoURL, title, company, mobile } = this.state

    const { error, loading } = this.props

    return (
      <StyledProfileSettings className="StyledProfileSettings">
        <Card>
          <CardMedia className="card-media" image={photoURL || avatar} />
          <CardContent>
            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.upload}
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
