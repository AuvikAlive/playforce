import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { StyledAddConditionRating } from './StyledAddConditionRating'

const manufacturers = ['Manufacturer 1', 'Manufacturer 2', 'Manufacturer 3']
const conditions = [
  '1 - Excellent',
  '2 - Good',
  '3 - Average',
  '4 - Poor',
  '5 - Failed',
]

export class AddConditionRating extends Component {
  state = {
    image: null,
    equipment: '',
    manufacturer: '',
    condition: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context

    setNavTitle('Add Condition Rating')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="go back"
        onClick={this.addConditionRating}
      >
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  capture = () => {
    this.fileInput.click()
  }

  getFile = event => {
    const reader = new FileReader()

    reader.readAsDataURL(event.target.files[0])

    reader.addEventListener(
      'load',
      () => {
        this.setState({ image: reader.result })
      },
      false,
    )
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  addConditionRating = () => {
    const { addConditionRating, history } = this.props
    const { image, equipment, manufacturer, condition } = this.state

    if (image && equipment && manufacturer && condition) {
      addConditionRating({
        image,
        equipment,
        manufacturer,
        condition,
      })
    }

    history.goBack()
  }

  render() {
    const { image, equipment, manufacturer, condition } = this.state

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
              onClick={this.capture}
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
                {manufacturers.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
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
          </CardContent>
        </Card>
        <input
          type="file"
          accept="image/*"
          // capture="environment"
          style={{ display: 'none' }}
          ref={input => {
            this.fileInput = input
          }}
          onChange={this.getFile}
        />
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
