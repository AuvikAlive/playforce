import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IconButton from '@material-ui/core/IconButton'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import {
  contextTypesUnsubscriber,
  conditions,
  equipmentState,
  equipmentTypes,
} from '../../../constants/'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ManufacturersDialogContainer } from '../../../components/manufacturersDialog/ManufacturersDialogContainer'
import {
  onComponentWillReceivePropsLoadDataWithLandscapeImage,
  onEventInputChange,
  onValueInputChange,
  getEquipmentSuggestions,
  getSuggestionsByName,
  showContentWhenLoaded,
} from '../../../functions/'
import { onComponentDidMount, onEquipmentSelect, submit } from './functions'
import { StyledConditionRatingForm } from './StyledConditionRatingForm'

export class ConditionRatingForm extends Component {
  state = {
    ...equipmentState,
    condition: conditions[0],
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadDataWithLandscapeImage(this, nextProps)
  }

  onEventInputChange = onEventInputChange
  onValueInputChange = onValueInputChange

  render() {
    const {
      image,
      captureImage,
      manufacturersLoaded,
      equipmentsLoaded,
      manufacturers,
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
    const isLoaded = manufacturersLoaded && equipmentsLoaded
    const isNotAncillary = itemType !== equipmentTypes[2]

    return showContentWhenLoaded(
      isLoaded,
      <StyledConditionRatingForm className="StyledConditionRatingForm">
        <Card className="card">
          {image && <img src={image} alt="equipment type" />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() => {
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
                onSuggestionSelect={onEquipmentSelect(this)}
                getSuggestions={getEquipmentSuggestions(this)}
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

              {isNotAncillary && (
                <TextField
                  fullWidth
                  label="Asset Id"
                  value={assetId}
                  margin="normal"
                  onChange={this.onEventInputChange('assetId')}
                />
              )}

              {isNotAncillary && (
                <div className="with-button">
                  <AutoComplete
                    label="Manufacturer"
                    value={manufacturer}
                    onChange={this.onValueInputChange('manufacturer')}
                    getSuggestions={getSuggestionsByName(manufacturers)}
                  />
                  <IconButton
                    onClick={() => openDialog(ManufacturersDialogContainer)}
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
                  onChange={this.onEventInputChange('estimatedDateInstalled')}
                  margin="normal"
                />
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
