import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import AddBoxIcon from '@material-ui/icons/AddBox'
import IconButton from '@material-ui/core/IconButton'
import StayCurrentLandscapeIcon from '@material-ui/icons/StayCurrentLandscape'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { equipmentTypes } from '../../../constants/'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ManufacturersDialogContainer } from '../../../components/manufacturersDialog/ManufacturersDialogContainer'
import { equipmentState, contextTypesUnsubscriber } from '../../../constants/'
import {
  onComponentWillReceivePropsLoadDataWithLandscapeImage,
  onEventInputChange,
  onValueInputChange,
  getSuggestionsByName,
  showContentWhenLoaded,
} from '../../../functions/'
import { StyledEquipmentForm } from './StyledEquipmentForm'
import { onComponentDidMount, submit } from './functions/'

export class EquipmentForm extends Component {
  state = equipmentState

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
      manufacturers,
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

    const isNotAncillary = itemType !== equipmentTypes[2]

    return showContentWhenLoaded(
      manufacturersLoaded,
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
      </StyledEquipmentForm>
    )
  }
}

EquipmentForm.contextTypes = contextTypesUnsubscriber
