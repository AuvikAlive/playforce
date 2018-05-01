import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { CircularProgress } from 'material-ui/Progress'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { defaultManufacturers } from '../../../globals/constants'
import { StyledEquipmentForm } from './StyledEquipmentForm'

export class EquipmentForm extends Component {
  state = {
    equipment: '',
    assetId: '',
    manufacturer: '',
  }

  componentDidMount() {
    const {
      manufacturersLoaded,
      fetchManufacturersRealTime,
      userId,
      initialData,
    } = this.props

    !manufacturersLoaded && fetchManufacturersRealTime(userId)
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

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async () => {
    const { image, setFeedback, onSubmit, afterSubmit } = this.props
    const { equipment, assetId, manufacturer } = this.state

    if (image && equipment && assetId && manufacturer) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          image,
          equipment,
          assetId,
          manufacturer,
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

  render() {
    const {
      image,
      captureImage,
      manufacturersLoaded,
      manufacturers,
      buttonText,
      error,
      loading,
    } = this.props
    const { equipment, assetId, manufacturer } = this.state

    return manufacturersLoaded ? (
      <StyledEquipmentForm className="StyledEquipmentForm">
        <Card>
          {image && <img src={image} alt="equipment type" />}
          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() => captureImage({ width: 300, height: 172 })}
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
              <TextField
                fullWidth
                label="Equipment"
                value={equipment}
                margin="normal"
                onChange={this.onInputChange('equipment')}
              />
              <TextField
                fullWidth
                label="Asset Id"
                value={assetId}
                margin="normal"
                onChange={this.onInputChange('assetId')}
              />

              <TextField
                fullWidth
                select
                label="Manufacturer"
                value={manufacturer}
                onChange={this.onInputChange('manufacturer')}
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
