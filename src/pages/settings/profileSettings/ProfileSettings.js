import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { StyledProfileSettings } from './StyledProfileSettings'
import avatar from './avatar.jpg'

export class ProfileSettings extends Component {
  state = {
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Profile Settings')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )
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
    this.setState({ error: '' })
    this.setState({ loading: true })

    const { firebase, uid } = this.props
    const displayImage = event.target.files[0]

    const storageRef = firebase.storage().ref()
    const imageRef = storageRef.child(`images/${uid}.jpg`)

    imageRef.put(displayImage).then(({ downloadURL }) => {
      firebase
        .updateProfile({ photoURL: downloadURL })
        .then(() => {
          this.setState({ loading: false })
        })
        .catch(error => {
          this.setState({ error: error.message })
          this.setState({ loading: false })
        })
    })
  }

  render() {
    const { displayName, photoURL } = this.props
    const { error, loading } = this.state
    return (
      <StyledProfileSettings>
        <Card>
          <CardMedia className="card-media" image={photoURL || avatar} />
          <CardContent>
            <Typography align="center" variant="headline" component="h2">
              {displayName}
            </Typography>
          </CardContent>

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
              onClick={this.upload}
            >
              Upload Image
            </Button>
          )}

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
