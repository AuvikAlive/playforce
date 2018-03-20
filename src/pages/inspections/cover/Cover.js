import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
import DateRangeIcon from 'material-ui-icons/DateRange'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { DatePicker } from 'material-ui-pickers'
import values from 'lodash/values'
import isEmpty from 'lodash/isEmpty'
import { StyledCover } from './StyledCover'
import { defaultClients, defaultStandards } from '../../../globals/scales'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'

export class Cover extends Component {
  state = {
    coverImage: null,
    location: '',
    client: '',
    customClient: '',
    inspectionDate: new Date(),
    appliedStandards: [],
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { cover, firestore, userId, history } = this.props

    !isEmpty(cover) &&
      this.setState({
        ...cover,
        location: cover.location.id,
        customClient: cover.client,
      })

    setNavTitle('Add Cover')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'sites' }],
      },
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'standards' }],
      },
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'clients' }],
      },
    ])
  }

  componentWillUnmount() {
    const { firestore, userId } = this.props
    const { removeNavTitle, removeLefNavComponent } = this.context

    firestore.unsetListeners([
      {
        collection: 'sites',
        orderBy: 'name',
      },
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'standards' }],
      },
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'clients' }],
      },
    ])

    removeNavTitle()
    removeLefNavComponent()
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
        this.setState({ coverImage: reader.result })
      },
      false,
    )
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onDateChange = date => {
    this.setState({ inspectionDate: date })
  }

  onCustomClientChange = event => {
    const customClient = event.target.value

    this.setState({
      customClient,
      client: '',
    })
  }

  onClientChange = event => {
    const client = event.target.value

    this.setState({
      client,
      customClient: client,
    })
  }

  addInspectionCover = () => {
    const {
      addInspectionCover,
      history,
      setErrorLoadingState,
      data: { sites },
    } = this.props
    const {
      coverImage,
      location,
      inspectionDate,
      appliedStandards,
    } = this.state

    let { client, customClient } = this.state

    client = customClient ? customClient : client

    if (
      coverImage &&
      location &&
      client &&
      inspectionDate &&
      appliedStandards
    ) {
      addInspectionCover({
        coverImage,
        location: {
          id: location,
          ...sites[location],
        },
        client,
        inspectionDate,
        appliedStandards,
      })
      history.goBack()
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const {
      coverImage,
      location,
      client,
      customClient,
      inspectionDate,
      appliedStandards,
    } = this.state

    const { displayName, data, error } = this.props

    let clients = []

    const sites = data && data.sites ? objectToArrayWithId(data.sites) : []
    const standards = data && data.standards ? values(data.standards) : []

    if (data) {
      clients = values(data.clients)
    }

    return (
      <StyledCover className="StyledCover">
        <Card>
          {coverImage && (
            <CardMedia className="card-media" image={coverImage} />
          )}

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
                select
                label="Location"
                value={location}
                onChange={this.onInputChange('location')}
                margin="normal"
              >
                {sites.length > 0 ? (
                  sites.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value="">No site addded</MenuItem>
                )}
              </TextField>

              <TextField
                fullWidth
                label="Client"
                value={customClient}
                margin="normal"
                onChange={this.onCustomClientChange}
              />

              <TextField
                fullWidth
                select
                label="Select a client"
                value={client}
                onChange={this.onClientChange}
                margin="normal"
              >
                {clients.length > 0
                  ? clients.map(({ name }, index) => {
                      return (
                        <MenuItem key={index} value={name}>
                          {name}
                        </MenuItem>
                      )
                    })
                  : defaultClients.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      )
                    })}
              </TextField>

              <DatePicker
                fullWidth
                keyboard
                clearable
                className="inspection-date"
                label="Inspection Date"
                format="DD MMMM YYYY"
                value={inspectionDate}
                keyboardIcon={<DateRangeIcon />}
                leftArrowIcon={<ArrowBackIcon />}
                rightArrowIcon={<ArrowForwardIcon />}
                onChange={this.onDateChange}
                animateYearScrolling={false}
              />

              <TextField
                fullWidth
                label="Inspected By"
                value={displayName}
                margin="normal"
              />

              <TextField
                fullWidth
                select
                SelectProps={{
                  multiple: true,
                }}
                label="Applied Standard"
                value={appliedStandards}
                onChange={this.onInputChange('appliedStandards')}
                margin="normal"
              >
                {standards.length > 0
                  ? standards.map(({ title, code }, index) => {
                      return (
                        <MenuItem key={index} value={`${title} ${code}`}>
                          {`${title} ${code}`}
                        </MenuItem>
                      )
                    })
                  : defaultStandards.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      )
                    })}
              </TextField>
            </form>

            {error && <p className="error">{error}</p>}

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.addInspectionCover}
            >
              save
            </Button>
          </CardContent>
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
        </Card>
      </StyledCover>
    )
  }
}

Cover.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
