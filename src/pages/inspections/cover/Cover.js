import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { CircularProgress } from 'material-ui/Progress'
import moment from 'moment'
import { StyledCover } from './StyledCover'

const locations = ['Location 1', 'Location 2', 'Location 3']
const clients = ['Client 1', 'Client 2', 'Client 3']
const standards = ['Standard 1', 'Standard 2', 'Standard 3']

export class Cover extends Component {
  state = {
    coverImage: null,
    location: '',
    client: '',
    defaultDate: moment().format('YYYY-MM-DD'),
    inspectionDate: '',
    appliedStandards: [],
    error: false,
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Add Cover')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }

  capture = () => {
    this.fileInput.click()
  }

  getFile = event => {
    const coverImage = URL.createObjectURL(event.target.files[0])

    this.setState({ coverImage })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const {
      coverImage,
      location,
      client,
      defaultDate,
      appliedStandards,
      error,
      loading,
    } = this.state

    const { displayName } = this.props

    return (
      <StyledCover className="StyledCover">
        <Card>
          {coverImage && (
            <CardMedia className="card-media" image={coverImage} />
          )}

          <CardContent>
            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.capture}
              >
                Capture Image
              </Button>
            )}
            <form noValidate>
              <TextField
                fullWidth
                select
                label="Location"
                value={location}
                onChange={this.onInputChange('location')}
                margin="normal"
              >
                {locations.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                select
                label="Client"
                value={client}
                onChange={this.onInputChange('client')}
                margin="normal"
              >
                {clients.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                className="inspection-date"
                label="Inspection Date"
                type="date"
                defaultValue={defaultDate}
                onChange={this.onInputChange('inspectionDate')}
              />

              <TextField
                fullWidth
                label="Inspected By"
                value={displayName}
                margin="normal"
              >
                {displayName}
              </TextField>

              <TextField
                fullWidth
                select
                label="Applied Standards"
                value={appliedStandards}
                SelectProps={{
                  multiple: true,
                }}
                onChange={this.onInputChange('appliedStandards')}
                margin="normal"
              >
                {standards.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </form>
          </CardContent>

          {error && <p className="error">{error}</p>}

          {!error &&
            loading && (
              <div className="loading">
                <CircularProgress />
              </div>
            )}
          <input
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: 'none' }}
            ref={input => {
              this.fileInput = input
            }}
            onChange={this.getFile}
          />
        </Card>
      </StyledCover>
    )
  }
}

Cover.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
