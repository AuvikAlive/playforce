import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import values from 'lodash/values'
import { StyledAddConditionRating } from './StyledAddConditionRating'
import { ConditionRatingForm } from '../ConditionRatingForm'

export class AddConditionRating extends Component {
  state = {
    equipment: '',
    manufacturer: '',
    customManufacturer: '',
    condition: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { firestore, userId, history } = this.props

    setNavTitle('Add Condition Rating')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'manufacturers' }],
    })
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context
    const { firestore, userId } = this.props

    removeNavTitle()
    removeLefNavComponent()

    firestore.unsetListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'manufacturers' }],
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onManufacturerChange = event => {
    const manufacturer = event.target.value

    this.setState({
      manufacturer,
      customManufacturer: manufacturer,
    })
  }

  onCustomManufacturerChange = event => {
    const customManufacturer = event.target.value

    this.setState({
      customManufacturer,
      manufacturer: '',
    })
  }

  addConditionRating = () => {
    const {
      addConditionRating,
      history,
      setErrorLoadingState,
      image,
    } = this.props
    const { equipment, condition } = this.state

    let { manufacturer, customManufacturer } = this.state

    manufacturer = customManufacturer ? customManufacturer : manufacturer

    if (image && equipment && manufacturer && condition) {
      addConditionRating({
        image,
        equipment,
        manufacturer,
        condition,
      })
      history.goBack()
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { image, captureImage, data, error } = this.props

    const manufacturers =
      data && data.manufacturers ? values(data.manufacturers) : []

    return (
      <StyledAddConditionRating className="StyledAddConditionRating">
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

            <ConditionRatingForm
              {...this.state}
              manufacturers={manufacturers}
              onManufacturerChange={this.onManufacturerChange}
              onCustomManufacturerChange={this.onCustomManufacturerChange}
              onInputChange={this.onInputChange}
            />

            {error && <p className="error">{error}</p>}

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.addConditionRating}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledAddConditionRating>
    )
  }
}

AddConditionRating.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
