import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox'
import CropIcon from '@material-ui/icons/Crop'
import IconButton from '@material-ui/core/IconButton'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ImageLightbox } from '../../../components/imageLightbox/ImageLightbox'
import {
  contextTypesUnsubscriber,
  equipmentConditions,
  equipmentState,
  equipmentTypes,
} from '../../../constants/'
import { ManufacturersDialogContainer } from '../../../components/manufacturersDialog/ManufacturersDialogContainer'
import {
  onComponentWillReceivePropsLoadDataWithLandscapeImage,
  onEventInputChange,
  onValueInputChange,
  getEquipmentSuggestions,
  getSuggestionsByName,
  showContentWhenLoaded,
  onSingleCrop,
} from '../../../functions/'
import { onComponentDidMount, onEquipmentSelect, submit } from './functions'
import { StyledConditionRatingForm } from './StyledConditionRatingForm'

export class ConditionRatingForm extends Component {
  state = {
    ...equipmentState,
    condition: equipmentConditions[0],
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadDataWithLandscapeImage(this, nextProps)
  }

  render() {
    const {
      image,
      captureImage,
      manufacturersLoaded,
      equipmentsLoaded,
      manufacturers,
      openDialog,
      closeDialog,
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

    const isLoaded = manufacturersLoaded && equipmentsLoaded
    const isNotAncillary = itemType !== equipmentTypes[2]

    return showContentWhenLoaded(
      isLoaded,
      <StyledConditionRatingForm className="StyledConditionRatingForm">
        <Card className="card">
          <div className="card-media">
            {image && <img src={image} alt="equipment type" />}
            {image && <ImageLightbox images={[image]} />}
          </div>

          <CardContent className="card-content">
            {image && (
              <Button
                variant="fab"
                color="primary"
                aria-label="crop image"
                className="floating-icon"
                onClick={onSingleCrop(this)}
              >
                <CropIcon />
              </Button>
            )}

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() => {
                captureImage({ width: 512, height: (512 * 432) / 764 })
              }}
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                label="Equipment"
                value={equipment}
                onChange={onValueInputChange(this, 'equipment')}
                onSuggestionSelect={onEquipmentSelect(this)}
                getSuggestions={getEquipmentSuggestions(this)}
              />

              <TextField
                fullWidth
                select
                label="Item Type"
                value={itemType}
                onChange={onEventInputChange(this, 'itemType')}
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

              {isNotAncillary && (
                <TextField
                  fullWidth
                  label="Asset Id"
                  value={assetId}
                  margin="normal"
                  onChange={onEventInputChange(this, 'assetId')}
                />
              )}

              {isNotAncillary && (
                <div className="with-button">
                  <AutoComplete
                    label="Manufacturer"
                    value={manufacturer}
                    onChange={onValueInputChange(this, 'manufacturer')}
                    getSuggestions={getSuggestionsByName(manufacturers)}
                  />
                  <IconButton
                    onClick={() =>
                      openDialog(
                        <ManufacturersDialogContainer
                          closeDialog={closeDialog}
                        />
                      )
                    }
                  >
                    <AddBoxIcon />
                  </IconButton>
                </div>
              )}

              {isNotAncillary && (
                <TextField
                  fullWidth
                  label="Estimated Date Installed"
                  value={estimatedDateInstalled}
                  onChange={onEventInputChange(this, 'estimatedDateInstalled')}
                  margin="normal"
                />
              )}

              <TextField
                fullWidth
                select
                label="Condition"
                value={condition}
                onChange={onEventInputChange(this, 'condition')}
                margin="normal"
              >
                {equipmentConditions.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
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
                onClick={submit(this)}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledConditionRatingForm>
    )
  }
}

ConditionRatingForm.contextTypes = contextTypesUnsubscriber
