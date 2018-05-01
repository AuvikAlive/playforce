import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
// import ArrowBackIcon from 'material-ui-icons/ArrowBack'
// import ArrowForwardIcon from 'material-ui-icons/ArrowForward'
// import DateRangeIcon from 'material-ui-icons/DateRange'
import AddBoxIcon from 'material-ui-icons/AddBox'
import IconButton from 'material-ui/IconButton'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
// import { DatePicker } from 'material-ui-pickers'
import { format } from 'date-fns'
import { defaultManufacturers, conditions } from '../../../globals/constants'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { ManufacturersDialogContainer } from '../../../components/manufacturersDialog/ManufacturersDialogContainer'
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

  componentDidMount() {
    const {
      manufacturersLoaded,
      fetchManufacturersRealTime,
      userId,
      equipmentsSite,
      siteId,
      fetchEquipmentsRealTime,
      initialData,
    } = this.props

    !manufacturersLoaded && fetchManufacturersRealTime(userId)
    equipmentsSite !== siteId && fetchEquipmentsRealTime(userId, siteId)
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
      manufacturers,
      equipments,
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

              <TextField
                fullWidth
                label="Asset Id"
                value={assetId}
                margin="normal"
                onChange={this.onInputChange('assetId')}
              />

              <div className="with-button">
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

                <IconButton
                  onClick={() => openDialog(ManufacturersDialogContainer)}
                >
                  <AddBoxIcon />
                </IconButton>
              </div>

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

              <TextField
                fullWidth
                label="Estimated Date Installed"
                value={estimatedDateInstalled}
                onChange={this.onInputChange('estimatedDateInstalled')}
                margin="normal"
              />

              {/* <DatePicker
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
              /> */}
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
