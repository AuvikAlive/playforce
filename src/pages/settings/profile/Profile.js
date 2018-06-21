import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Signature } from '../../../components/signature/Signature'
import { StyledProfile } from './StyledProfile'

export class Profile extends Component {
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

    setNavTitle('Profile')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    this.setState({ displayName, image, title, company, mobile })
    setCapturedImage(image)
    // signature && this.mySignature.fromDataURL(signature)
    signature && this.signature.setSignature(signature)
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

  submit = async () => {
    const { displayName, title, company, mobile } = this.state
    const { updateProfile, setFeedback, image } = this.props

    setFeedback({ error: '', loading: true })

    let data = {}
    Object.assign(
      data,
      displayName && { displayName },
      title && { title },
      company && { company },
      mobile && { mobile },
      image && { image },
      !this.signature.isEmpty() && { signature: this.signature.getSignature() }
      // !this.mySignature.isEmpty() && { signature: this.mySignature.toDataURL() }
    )

    try {
      await updateProfile(data)
      setFeedback({ success: 'Profile updated!', loading: false })
    } catch (error) {
      setFeedback({ error: error.message, loading: false })
    }
  }

  render() {
    const { displayName, title, company, mobile } = this.state
    const { image, captureImage, error, loading } = this.props

    return (
      <StyledProfile className="StyledProfile">
        <Card className="card">
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

            {/* <FormControl fullWidth>
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
            </FormControl> */}

            <Signature
              ref={node => {
                this.signature = node
              }}
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
                onClick={this.submit}
              >
                Update
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledProfile>
    )
  }
}

Profile.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
