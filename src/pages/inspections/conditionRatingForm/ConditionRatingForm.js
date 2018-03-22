import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import values from 'lodash/values'
import { defaultManufacturers, conditions } from '../../../globals/scales'
import { StyledConditionRatingForm } from './StyledConditionRatingForm'

export class ConditionRatingForm extends Component {
  state = {
    equipment: '',
    manufacturer: '',
    condition: '',
  }

  componentDidMount() {
    const { firestore, userId, initialData } = this.props

    firestore.setListener({
      collection: 'users',
      doc: userId,
      subcollections: [{ collection: 'manufacturers' }],
    })

    initialData && this.loadInitialData(initialData)
  }

  componentWillUnmount() {
    const { firestore, userId } = this.props

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

  onSubmit = () => {
    const { onSubmit, setErrorLoadingState, image } = this.props
    const { equipment, manufacturer, condition } = this.state

    if (image && equipment && manufacturer && condition) {
      setErrorLoadingState({ error: '' })
      onSubmit({ image, equipment, manufacturer, condition })
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { image, captureImage, data, error } = this.props
    const { equipment, manufacturer, condition } = this.state

    const manufacturers =
      data && data.manufacturers ? values(data.manufacturers) : []

    return (
      <StyledConditionRatingForm className="StyledConditionRatingForm">
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

              <TextField
                fullWidth
                select
                label="Condition"
                value={condition}
                onChange={this.onInputChange('condition')}
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

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.onSubmit}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledConditionRatingForm>
    )
  }
}
