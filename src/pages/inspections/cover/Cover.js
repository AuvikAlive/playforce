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
import { LinearProgress } from 'material-ui/Progress'
import values from 'lodash/values'
import isEmpty from 'lodash/isEmpty'
import { StyledCover } from './StyledCover'
// import { defaultClients, defaultStandards } from '../../../globals/scales'
import { objectToArrayWithId } from '../../../utilities/objectToArrayWithId'

export class Cover extends Component {
  state = {
    location: '',
    client: '',
    inspectionDate: new Date(),
    appliedStandards: [],
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { cover, firestore, userId, history, setCapturedImage } = this.props

    if (!isEmpty(cover)) {
      const { image } = cover

      setCapturedImage(image)

      this.setState({
        ...cover,
        location: cover.location.id,
      })
    }

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

  // shouldComponentUpdate({ data }) {
  //   return !!(data && data.sites && data.standards && data.clients)
  // }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onDateChange = date => {
    this.setState({ inspectionDate: date })
  }

  addInspectionCover = () => {
    const {
      addInspectionCover,
      history,
      setErrorLoadingState,
      image,
      data: { sites },
    } = this.props
    const { location, client, inspectionDate, appliedStandards } = this.state

    if (image && location && client && inspectionDate && appliedStandards) {
      addInspectionCover({
        image,
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
    const { location, client, inspectionDate, appliedStandards } = this.state

    const { image, captureImage, displayName, data, error } = this.props

    const sites = data && data.sites ? objectToArrayWithId(data.sites) : []
    const standards = data && data.standards && values(data.standards)
    const clients = data && data.clients && values(data.clients)

    return sites ? (
      <StyledCover className="StyledCover">
        <Card>
          {image && <CardMedia className="card-media" image={image} />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={captureImage}
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
                select
                label="Client"
                value={client}
                onChange={this.onInputChange('client')}
                margin="normal"
              >
                {clients > 0 ? (
                  clients.map(({ name }, index) => {
                    return (
                      <MenuItem key={index} value={name}>
                        {name}
                      </MenuItem>
                    )
                  })
                ) : (
                  <MenuItem value="">No client addded</MenuItem>
                )}
              </TextField>

              <DatePicker
                fullWidth
                keyboard
                clearable
                className="date-picker"
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
                {standards > 0 ? (
                  standards.map(({ title, code }, index) => {
                    return (
                      <MenuItem key={index} value={`${title} ${code}`}>
                        {`${title} ${code}`}
                      </MenuItem>
                    )
                  })
                ) : (
                  <MenuItem value="">No standards addded</MenuItem>
                )}
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
        </Card>
      </StyledCover>
    ) : (
      <LinearProgress />
    )
  }
}

Cover.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
