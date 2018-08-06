import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CropIcon from '@material-ui/icons/Crop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Signature } from '../../../components/signature/Signature'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
  onSingleCrop,
} from '../../../functions/'
import { StyledProfile } from './StyledProfile'
import { state } from './state'
import { onComponentDidMount, submit } from './functions/'

export class Profile extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { displayName, title, company, mobile } = this.state
    const {
      image,
      profile: { signature },
      captureImage,
      error,
      loading,
    } = this.props

    return (
      <StyledProfile className="StyledProfile">
        <Card className="card">
          {image && <img src={image} alt="user" />}

          <CardContent className="card-content">
            {image && (
              <Button
                variant="fab"
                color="primary"
                aria-label="crop image"
                className="floating-icon"
                onClick={onSingleCrop(this, 1)}
              >
                <CropIcon />
              </Button>
            )}

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
              onChange={onEventInputChange(this, 'displayName')}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={onEventInputChange(this, 'title')}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Company"
              value={company}
              onChange={onEventInputChange(this, 'company')}
              margin="normal"
            />

            <TextField
              fullWidth
              label="Mobile"
              value={mobile}
              onChange={onEventInputChange(this, 'mobile')}
              margin="normal"
            />

            <Signature
              signature={signature}
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
                onClick={submit(this)}
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

Profile.contextTypes = contextTypesTitleLeftNav
