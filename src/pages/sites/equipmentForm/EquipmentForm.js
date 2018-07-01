import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IconButton from '@material-ui/core/IconButton'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { equipmentTypes } from '../../../globals/constants'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ManufacturersDialogContainer } from '../../../components/manufacturersDialog/ManufacturersDialogContainer'
import { onEventInputChange } from '../../../functions/onEventInputChange'
import { onValueInputChange } from '../../../functions/onValueInputChange'
import { getSuggestionsByName } from '../../../functions/getSuggestionsByName'
import { StyledEquipmentForm } from './StyledEquipmentForm'

export class EquipmentForm extends Component {
  state = {
    itemType: equipmentTypes[0],
    equipment: '',
    assetId: '',
    manufacturer: '',
    estimatedDateInstalled: '',
  }

  async componentDidMount() {
    const {
      manufacturersLoaded,
      fetchManufacturersRealTime,
      userId,
      initialData,
    } = this.props

    const { addUnsubscriber } = this.context

    !manufacturersLoaded &&
      addUnsubscriber(await fetchManufacturersRealTime(userId))
    initialData && this.loadInitialData(initialData)
  }

  componentWillReceiveProps({ initialData }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }
  }

  loadInitialData = initialData => {
    const { setCapturedImage } = this.props
    const { image } = initialData

    setCapturedImage(image)
    this.setState({
      ...initialData,
    })
  }

  onEventInputChange = onEventInputChange
  onValueInputChange = onValueInputChange

  getManufacturerSuggestions = value => {
    const { manufacturers } = this.props

    return getSuggestionsByName(value, manufacturers)
  }

  submitItem = async () => {
    const { image, setFeedback, onSubmit, afterSubmit } = this.props
    const {
      itemType,
      equipment,
      assetId,
      manufacturer,
      estimatedDateInstalled,
    } = this.state

    if (
      image &&
      equipment &&
      assetId &&
      manufacturer &&
      estimatedDateInstalled
    ) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          image,
          itemType,
          equipment,
          assetId,
          manufacturer,
          estimatedDateInstalled,
        })
        setFeedback({ loading: false })
        afterSubmit && afterSubmit(result)
      } catch (error) {
        setFeedback({
          error: error.message,
          loading: false,
        })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  submitAncillaryItem = async () => {
    const { image, setFeedback, onSubmit, afterSubmit } = this.props
    const { itemType, equipment } = this.state

    if (image && equipment) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          image,
          itemType,
          equipment,
          assetId: '',
          manufacturer: '',
        })
        setFeedback({ loading: false })
        afterSubmit && afterSubmit(result)
      } catch (error) {
        setFeedback({
          error: error.message,
          loading: false,
        })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  submit = async () => {
    const { itemType } = this.state

    if (itemType !== equipmentTypes[2]) {
      this.submitItem()
    } else {
      this.submitAncillaryItem()
    }
  }

  render() {
    const {
      image,
      captureImage,
      manufacturersLoaded,
      buttonText,
      openDialog,
      error,
      loading,
    } = this.props
    const {
      itemType,
      equipment,
      assetId,
      manufacturer,
      estimatedDateInstalled,
    } = this.state

    return manufacturersLoaded ? (
      <StyledEquipmentForm className="StyledEquipmentForm">
        <Card className="card">
          {image && <img src={image} alt="equipment type" />}
          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
                captureImage({ width: 1024, height: (1024 * 172) / 300 })
              }
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
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

              <TextField
                fullWidth
                label="Equipment"
                value={equipment}
                margin="normal"
                onChange={this.onEventInputChange('equipment')}
              />

              {itemType !== equipmentTypes[2] && (
                <TextField
                  fullWidth
                  label="Asset Id"
                  value={assetId}
                  margin="normal"
                  onChange={this.onEventInputChange('assetId')}
                />
              )}

              {itemType !== equipmentTypes[2] && (
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

              {itemType !== equipmentTypes[2] && (
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
      </StyledEquipmentForm>
    ) : (
      <LinearProgress />
    )
  }
}

EquipmentForm.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
