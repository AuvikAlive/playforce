import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
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
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      history,
      profile: { displayName, photoURL, title = '', company = '' },
    } = this.props

    setNavTitle('Profile Settings')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    this.setState({ displayName, photoURL, title, company })
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

    this.setState({ error: '', loading: true })

    const { firebase, uid } = this.props

    if (displayImage) {
      const storageRef = firebase.storage().ref()
      const imageRef = storageRef.child(`images/${uid}.jpg`)

      try {
        const { downloadURL } = await imageRef.put(displayImage)

        this.updateProfile(downloadURL)
      } catch (error) {
        this.setState({ error: error.message, loading: false })
      }
    } else {
      this.updateProfile()
    }
  }

  updateProfile = async downloadURL => {
    const { displayName, photoURL, title, company } = this.state
    const { firebase } = this.props

    try {
      await firebase.updateProfile({
        displayName,
        title,
        company,
        photoURL: downloadURL || photoURL,
      })
      this.setState({ loading: false })
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    const { displayName, photoURL, title, company, error, loading } = this.state

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
