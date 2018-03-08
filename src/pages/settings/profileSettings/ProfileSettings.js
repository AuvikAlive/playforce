import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import { Content } from '../../../components/content/Content'
import dummy from './avatar.jpg'

export class ProfileSettings extends Component {
  state = {
    photoURL: null,
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
    const customRef = storageRef.child(`images/${uid}.jpg`)

    customRef.put(displayImage).then(({ downloadURL }) => {
      firebase
        .updateProfile({ photoURL: downloadURL })
        .then(() => {
          this.setState({ loading: false, photoURL: downloadURL })
        })
        .catch(error => {
          this.setState({ error: error.message })
          this.setState({ loading: false })
        })

      // firestore
      //   .update(`users/${uid}`, { photoURL: downloadURL })
      //   .then(() => {
      //     this.setState({ loading: false, photoURL: downloadURL })
      //   })
      //   .catch(error => {
      //     this.setState({ error: error.message })
      //     this.setState({ loading: false })
      //   })
    })
  }

  render() {
    const { displayName, photoURL } = this.props
    const { error, loading } = this.state
    const avatar = photoURL || dummy
    return (
      <Content>
        <Card>
          <CardMedia style={{ height: 400 }} image={avatar} />
          <CardContent>
            <Typography align="center" variant="headline" component="h2">
              {displayName}
            </Typography>
          </CardContent>

          {error && <p className="error">{error}</p>}

          {!error &&
            loading && (
              <div
                className="loading"
                style={{ display: 'flex', justifyContent: 'center' }}
              >
                <CircularProgress />
              </div>
            )}

          {!loading && (
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="upload-button"
              onClick={this.upload}
            >
              Upload Image
            </Button>
          )}

          <input
            name="myFile"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={input => {
              this.fileInput = input
            }}
            onChange={this.getFile}
          />
        </Card>
      </Content>
    )
  }
}

ProfileSettings.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
