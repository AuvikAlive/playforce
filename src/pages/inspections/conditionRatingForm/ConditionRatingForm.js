import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import AddBoxIcon from 'material-ui-icons/AddBox'
import IconButton from 'material-ui/IconButton'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import { format } from 'date-fns'
import { conditions } from '../../../globals/constants'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ManufacturersDialogContainer } from '../../../components/manufacturersDialog/ManufacturersDialogContainer'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { onValueInputChange } from '../../../utilities/onValueInputChange'
import { StyledConditionRatingForm } from './StyledConditionRatingForm'

const today = new Date()

export class ConditionRatingForm extends Component {
  state = {
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
      fetchEquipmentsRealTime,
      initialData,
    } = this.props

    const { addUnsubscriber } = this.context

    !manufacturersLoaded &&
      addUnsubscriber(await fetchManufacturersRealTime(userId))
    equipmentsSite !== siteId &&
      addUnsubscriber(await fetchEquipmentsRealTime(userId, siteId))
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

  onAutoCompleteChange = value => {
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

  submit = async () => {
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
        !equipments.find(item => item.assetId === assetId) &&
        addEquipment(userId, siteId, {
          image,
          equipment,
          assetId,
          manufacturer,
        })
      const result = await onSubmit({
        image,
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
                captureImage({ width: 1024, height: 1024 * 432 / 764 })
              }}
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                label="Equipment"
                value={equipment}
                onChange={this.onAutoCompleteChange}
                getSuggestions={this.getEquipmentSuggestions}
              />

              <TextField
                fullWidth
                label="Asset Id"
                value={assetId}
                margin="normal"
                onChange={this.onEventInputChange('assetId')}
              />

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

              {/* <div className="with-button">
                <TextField
                  fullWidth
                  select
                  label="Manufacturer"
                  value={manufacturer}
                  onChange={this.onEventInputChange('manufacturer')}
                  margin="normal"
                >
                  {manufacturers.length > 0
                    ? manufacturers.map(({ name }, index) => {
                        return (
                          <MenuItem key={index} value={name}>
                            {name}
                          </MenuItem>
                        )
                      })
                    : defaultManufacturers.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        )
                      })}
                </TextField>

                <IconButton
                  onClick={() => openDialog(ManufacturersDialogContainer)}
                >
                  <AddBoxIcon />
                </IconButton>
              </div> */}

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

              <TextField
                fullWidth
                label="Estimated Date Installed"
                value={estimatedDateInstalled}
                onChange={this.onEventInputChange('estimatedDateInstalled')}
                margin="normal"
              />
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
