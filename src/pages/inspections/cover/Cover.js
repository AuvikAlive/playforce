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
import { StyledCover } from './StyledCover'

const clients = ['Client 1', 'Client 2', 'Client 3']
// const standards = ['Standard 1', 'Standard 2', 'Standard 3']

export class Cover extends Component {
  state = {
    coverImage: null,
    location: '',
    client: '',
    inspectionDate: new Date(),
    appliedStandards: [],
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { cover, firestore, uid } = this.props

    cover && this.setState({ ...cover })

    setNavTitle('Add Cover')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="Search"
        onClick={this.addInspectionCover}
      >
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListener({
      collection: 'sites',
      orderBy: 'name',
    })

    firestore.setListener({
      collection: 'users',
      doc: uid,
      subcollections: [{ collection: 'standards' }],
    })
  }

  componentWillUnmount() {
    const { firestore, uid } = this.props
    const { removeNavTitle, removeLefNavComponent } = this.context

    firestore.unsetListener({
      collection: 'sites',
      orderBy: 'name',
    })

    firestore.unsetListener({
      collection: 'users',
      doc: uid,
      subcollections: [{ collection: 'standards' }],
    })

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

  addInspectionCover = () => {
    const { addInspectionCover, history } = this.props
    const {
      coverImage,
      location,
      client,
      inspectionDate,
      appliedStandards,
    } = this.state

    if (
      coverImage &&
      location &&
      client &&
      inspectionDate &&
      appliedStandards
    ) {
      addInspectionCover({
        coverImage,
        location,
        client,
        inspectionDate,
        appliedStandards,
      })
    }

    history.goBack()
  }

  render() {
    const {
      coverImage,
      location,
      client,
      inspectionDate,
      appliedStandards,
    } = this.state

    const { sites, displayName, standards } = this.props

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
                {sites.map(({ id, name }) => (
                  <MenuItem key={id} value={id}>
                    {name}
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
                label="Applied Standards"
                value={appliedStandards}
                SelectProps={{
                  multiple: true,
                }}
                onChange={this.onInputChange('appliedStandards')}
                margin="normal"
              >
                {standards.map(({ id, title }) => {
                  return (
                    <MenuItem key={id} value={title}>
                      {title}
                    </MenuItem>
                  )
                })}
              </TextField>
            </form>
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
