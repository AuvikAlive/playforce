import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IconButton from '@material-ui/core/IconButton'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import { format } from 'date-fns'
import { conditions } from '../../../globals/constants'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ManufacturersDialogContainer } from '../../../components/manufacturersDialog/ManufacturersDialogContainer'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { onValueInputChange } from '../../../utilities/onValueInputChange'
import { equipmentTypes } from '../../../globals/constants'
import { StyledConditionRatingForm } from './StyledConditionRatingForm'

const today = new Date()

export class ConditionRatingForm extends Component {
  state = {
    itemType: equipmentTypes[0],
    equipment: '',
    assetId: '',
    manufacturer: '',
    condition: conditions[0],
    estimatedDateInstalled: format(today, 'YYYY'),
  }

  async componentDidMount() {
    const {
      manufacturersLoaded,
      fetchManufacturersRealTime,
      userId,
      equipmentsSite,
      siteId,
      fetchEquipments,
      initialData,
    } = this.props

    const { addUnsubscriber } = this.context

    !manufacturersLoaded &&
      addUnsubscriber(await fetchManufacturersRealTime(userId))
    equipmentsSite !== siteId && fetchEquipments(userId, siteId)
    initialData && this.loadInitialData(initialData)
  }

  componentWillReceiveProps({
    initialData,
    imageCaptured,
    image,
    imageNaturalAspectRatio,
  }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }

    if (imageCaptured && image !== this.props.image) {
      const { setFeedback } = this.props

      imageNaturalAspectRatio <= 1
        ? setFeedback({ error: 'Please upload a landscape image!' })
        : setFeedback({ error: '' })
    }
  }

  loadInitialData = conditionRating => {
    const { setCapturedImage } = this.props
    const { image, estimatedDateInstalled } = conditionRating

    setCapturedImage(image)
    this.setState({
      ...conditionRating,
      id: conditionRating.equipmentId,
      estimatedDateInstalled: format(estimatedDateInstalled, 'YYYY'),
    })
  }

  onEventInputChange = onEventInputChange
  onValueInputChange = onValueInputChange

  getEquipmentSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { equipments } = this.props

    return inputLength === 0
      ? equipments.map(item => item.equipment)
      : equipments
          .filter(
            item =>
              item.equipment.toLowerCase().slice(0, inputLength) === inputValue
          )
          .map(item => item.equipment)
  }

  getManufacturerSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { manufacturers } = this.props

    return inputLength === 0
      ? manufacturers.map(item => item.name)
      : manufacturers
          .filter(
            item => item.name.toLowerCase().slice(0, inputLength) === inputValue
          )
          .map(item => item.name)
  }

  onEquipmentSelect = value => {
    const { equipments, setCapturedImage } = this.props
    const equipment = equipments.find(({ equipment }) => equipment === value)

    if (equipment) {
      setCapturedImage(equipment.image)
      this.setState({
        ...equipment,
      })
    } else {
      this.setState({ equipment: value })
    }
  }

  submitPlayItem = async () => {
    const {
      onSubmit,
      afterSubmit,
      setFeedback,
      image,
      equipmentsSite,
      siteId,
      equipments,
      addEquipment,
      userId,
    } = this.props
    const {
      itemType,
      equipment,
      assetId,
      manufacturer,
      condition,
      estimatedDateInstalled,
    } = this.state

    if (
      image &&
      equipment &&
      assetId &&
      manufacturer &&
      condition &&
      estimatedDateInstalled
    ) {
      setFeedback({ error: '', loading: true })
      equipmentsSite === siteId &&
        !equipments.find(item => item.equipment === equipment) &&
        addEquipment(userId, siteId, {
          image,
          itemType,
          equipment,
          assetId,
          manufacturer,
        })
      const result = await onSubmit({
        image,
        itemType,
        equipment,
        assetId,
        manufacturer,
        condition,
        estimatedDateInstalled,
      })
      setFeedback({ loading: false })
      afterSubmit && afterSubmit(result)
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  submitAncillaryItem = async () => {
    const {
      onSubmit,
      afterSubmit,
      setFeedback,
      image,
      equipmentsSite,
      siteId,
      equipments,
      addEquipment,
      userId,
    } = this.props
    const { itemType, equipment, condition } = this.state

    if (image && equipment && condition) {
      setFeedback({ error: '', loading: true })
      equipmentsSite === siteId &&
        !equipments.find(item => item.equipment === equipment) &&
        addEquipment(userId, siteId, {
          image,
          itemType,
          equipment,
        })
      const result = await onSubmit({
        image,
        itemType,
        equipment,
        condition,
      })
      setFeedback({ loading: false })
      afterSubmit && afterSubmit(result)
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  submit = () => {
    const { itemType } = this.state

    if (itemType === equipmentTypes[0]) {
      this.submitPlayItem()
    } else {
      this.submitAncillaryItem()
    }
  }

  render() {
    const {
      image,
      captureImage,
      manufacturersLoaded,
      equipmentsLoaded,
      openDialog,
      buttonText,
      error,
      loading,
    } = this.props
    const {
      itemType,
      equipment,
      assetId,
      manufacturer,
      condition,
      estimatedDateInstalled,
    } = this.state

    return manufacturersLoaded && equipmentsLoaded ? (
      <StyledConditionRatingForm className="StyledConditionRatingForm">
        <Card>
          {image && <img src={image} alt="equipment type" />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() => {
                // captureImage({ width: 300, height: 172 })
                captureImage({ width: 1024, height: (1024 * 432) / 764 })
              }}
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                label="Equipment"
                value={equipment}
                onChange={this.onValueInputChange('equipment')}
                onSuggestionSelect={this.onEquipmentSelect}
                getSuggestions={this.getEquipmentSuggestions}
              />

              <TextField
                fullWidth
                select
                label="Item Type"
                value={itemType}
                onChange={this.onEventInputChange('itemType')}
                margin="normal"
              >
                {equipmentTypes.map((type, index) => {
                  return (
                    <MenuItem key={index} value={type}>
                      {type}
                    </MenuItem>
                  )
                })}
              </TextField>

              {itemType === equipmentTypes[0] && (
                <TextField
                  fullWidth
                  label="Asset Id"
                  value={assetId}
                  margin="normal"
                  onChange={this.onEventInputChange('assetId')}
                />
              )}

              {itemType === equipmentTypes[0] && (
                <div className="with-button">
                  <AutoComplete
                    label="Manufacturer"
                    value={manufacturer}
                    onChange={this.onValueInputChange('manufacturer')}
                    getSuggestions={this.getManufacturerSuggestions}
                  />
                  <IconButton
                    onClick={() => openDialog(ManufacturersDialogContainer)}
                  >
                    <AddBoxIcon />
                  </IconButton>
                </div>
              )}

              <TextField
                fullWidth
                select
                label="Condition"
                value={condition}
                onChange={this.onEventInputChange('condition')}
                margin="normal"
              >
                {conditions.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              {itemType === equipmentTypes[0] && (
                <TextField
                  fullWidth
                  label="Estimated Date Installed"
                  value={estimatedDateInstalled}
                  onChange={this.onEventInputChange('estimatedDateInstalled')}
                  margin="normal"
                />
              )}
            </form>

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
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledConditionRatingForm>
    ) : (
      <LinearProgress />
    )
  }
}

ConditionRatingForm.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
