import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import DeleteIcon from 'material-ui-icons/Delete'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import values from 'lodash/values'
import { StyledEditConditionRating } from './StyledEditConditionRating'
import { ConditionRatingForm } from '../ConditionRatingForm'

export class EditConditionRating extends Component {
  state = {
    equipment: '',
    manufacturer: '',
    customManufacturer: '',
    condition: '',
  }

  componentDidMount() {
    const {
      setNavTitle,
      setLeftNavComponent,
      setRightNavComponent,
    } = this.context
    const {
      firestore,
      userId,
      history,
      conditionRating,
      openModal,
    } = this.props

    setNavTitle('Edit Condition Rating')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    setRightNavComponent(
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openModal(this.delete)}
      >
        <DeleteIcon />
      </IconButton>,
    )

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'manufacturers' }],
    })

    this.loadInitialData(conditionRating)
  }

  componentWillUnmount() {
    const {
      removeNavTitle,
      removeLefNavComponent,
      removeRightNavComponent,
    } = this.context
    const { firestore, userId } = this.props

    removeNavTitle()
    removeLefNavComponent()
    removeRightNavComponent()

    firestore.unsetListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'manufacturers' }],
    })
  }

  loadInitialData = conditionRating => {
    const { setCapturedImage } = this.props
    const { image } = conditionRating

    setCapturedImage(image)
    this.setState({
      ...conditionRating,
      customManufacturer: conditionRating.manufacturer,
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

  editConditionRating = () => {
    const {
      editConditionRating,
      history,
      setErrorLoadingState,
      image,
      conditionRatingIndex,
    } = this.props
    const { equipment, condition } = this.state

    let { manufacturer, customManufacturer } = this.state

    manufacturer = customManufacturer ? customManufacturer : manufacturer

    if (image && equipment && manufacturer && condition) {
      setErrorLoadingState({ error: '' })
      editConditionRating({
        issueIndex: conditionRatingIndex,
        updatedValue: {
          image,
          equipment,
          manufacturer,
          condition,
        },
      })
      history.goBack()
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  delete = () => {
    const { deleteConditionRating, conditionRatingIndex, history } = this.props

    deleteConditionRating(conditionRatingIndex)
    history.goBack()
  }

  render() {
    const { image, captureImage, data, error } = this.props

    const manufacturers =
      data && data.manufacturers ? values(data.manufacturers) : []

    return (
      <StyledEditConditionRating className="StyledEditConditionRating">
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
              onClick={this.editConditionRating}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledEditConditionRating>
    )
  }
}

EditConditionRating.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  setRightNavComponent: PropTypes.func,
  removeRightNavComponent: PropTypes.func,
}
