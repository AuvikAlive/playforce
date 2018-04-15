import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
import DateRangeIcon from 'material-ui-icons/DateRange'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import { DatePicker } from 'material-ui-pickers'
import { defaultManufacturers, conditions } from '../../../globals/constants'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { StyledConditionRatingForm } from './StyledConditionRatingForm'

export class ConditionRatingForm extends Component {
  state = {
    equipment: '',
    assetId: '',
    manufacturer: '',
    condition: conditions[0],
    estimatedDateInstalled: new Date(),
    unsubscribe: null,
  }

  componentDidMount() {
    const {
      manufacturersLoaded,
      fetchManufacturers,
      userId,
      initialData,
    } = this.props

    !manufacturersLoaded && fetchManufacturers(userId)
    initialData && this.loadInitialData(initialData)
  }

  componentWillReceiveProps({ imageNaturalAspectRatio }) {
    if (imageNaturalAspectRatio) {
      const { setErrorLoadingState } = this.props

      imageNaturalAspectRatio <= 1
        ? setErrorLoadingState({ error: 'Please upload a landscape image!' })
        : setErrorLoadingState({ error: '' })
    }
  }

  loadInitialData = conditionRating => {
    const { setCapturedImage } = this.props
    const { image } = conditionRating

    setCapturedImage(image)
    this.setState({
      ...conditionRating,
      id: conditionRating.equipmentId,
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onDateChange = date => {
    this.setState({ estimatedDateInstalled: date })
  }

  onAutoCompleteChange = value => {
    const { setCapturedImage } = this.props

    if (value.equipment) {
      setCapturedImage(value.image)
      this.setState({
        ...value,
      })
    } else {
      this.setState({ equipment: value })
    }
  }

  onSubmit = () => {
    const { onSubmit, setErrorLoadingState, image } = this.props
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
      setErrorLoadingState({ error: '' })
      onSubmit({
        image,
        equipment,
        assetId,
        manufacturer,
        condition,
        estimatedDateInstalled,
      })
    } else {
      setErrorLoadingState({
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
      equipments,
      error,
    } = this.props
    const {
      equipment,
      assetId,
      manufacturer,
      condition,
      estimatedDateInstalled,
    } = this.state

    return manufacturersLoaded ? (
      <StyledConditionRatingForm className="StyledConditionRatingForm">
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
              <AutoComplete
                onChange={this.onAutoCompleteChange}
                label="Equipment"
                value={equipment}
                domain={equipments}
                filterProperty="equipment"
              />

              {/* <TextField
                fullWidth
                label="Equipment"
                value={equipment}
                margin="normal"
                onChange={this.onInputChange('equipment')}
              /> */}

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

              <DatePicker
                fullWidth
                keyboard
                clearable
                className="date-picker"
                label="Estimated Date Installed"
                format="YYYY"
                openToYearSelection
                value={estimatedDateInstalled}
                keyboardIcon={<DateRangeIcon />}
                leftArrowIcon={<ArrowBackIcon />}
                rightArrowIcon={<ArrowForwardIcon />}
                onChange={this.onDateChange}
                animateYearScrolling={false}
              />
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
    ) : (
      <LinearProgress />
    )
  }
}
