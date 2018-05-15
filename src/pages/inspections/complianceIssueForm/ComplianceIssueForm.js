import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import BrushIcon from 'material-ui-icons/Brush'
import StayCurrentPortraitIcon from 'material-ui-icons/StayCurrentPortrait'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { Carousel } from '../../../components/carousel/Carousel'
import { Sketch } from '../../../components/sketch/Sketch'
import {
  probabilities,
  severities,
  riskLevels,
} from '../../../globals/constants'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { onValueInputChange } from '../../../utilities/onValueInputChange'
import { StyledComplianceIssueForm } from './StyledComplianceIssueForm'

export class ComplianceIssueForm extends Component {
  state = {
    commonIssues: [],
    commonIssue: '',
    commonIssueIndex: '',
    finding: '',
    equipment: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
    imageEditMode: false,
  }

  componentDidMount() {
    const {
      setRightNav,
      commonIssuesLoaded,
      fetchCommonIssuesRealTime,
      userId,
      equipmentsSite,
      siteId,
      fetchEquipmentsRealTime,
      initialData,
    } = this.props

    setRightNav && setRightNav()
    !commonIssuesLoaded && fetchCommonIssuesRealTime(userId)
    equipmentsSite !== siteId && fetchEquipmentsRealTime(userId, siteId)
    initialData && this.loadInitialData(initialData)
  }

  componentWillUnmount() {
    const { removeRightNav } = this.props
    removeRightNav && removeRightNav()
  }

  componentWillReceiveProps({ imageCaptured, initialData, images }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }
    if (imageCaptured && images !== this.props.images) {
      const { setFeedback } = this.props
      const notPortrait = images.some(
        ({ imageNaturalAspectRatio }) => imageNaturalAspectRatio > 1
      )
      this.loadImages(images)
      if (images.length > 4 && notPortrait) {
        setFeedback({
          error: 'Please upload no more than 4 portrait image(s)!',
        })
      } else if (images.length > 4) {
        setFeedback({
          error: 'Please upload no more than 4 image(s)!',
        })
      } else if (notPortrait) {
        setFeedback({ error: 'Please upload portrait image(s)!' })
      } else {
        setFeedback({ error: '' })
      }
    }
  }

  loadInitialData = data => {
    this.setState({
      ...data,
    })
  }

  onFindingChange = event => {
    const commonIssueIndex = event.target.value

    if (commonIssueIndex !== undefined) {
      const { commonIssues } = this.props
      const commonIssue = commonIssues[commonIssueIndex]

      this.setState({ commonIssueIndex, ...commonIssue })
    }
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

  getCommonIssueSuggestions = value => {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    const { commonIssues } = this.props

    return inputLength === 0
      ? commonIssues.filter(item => !!item.issue).map(item => item.issue)
      : commonIssues
          .filter(
            item =>
              item.issue.toLowerCase().slice(0, inputLength) === inputValue
          )
          .map(item => item.issue)
  }

  onCommonIssueSelect = value => {
    const { commonIssues } = this.props
    const commonIssue = commonIssues.find(({ issue }) => issue === value)

    commonIssue && this.setState({ ...commonIssue })
  }

  loadImages = images => {
    this.setState({ images })
  }

  saveImages = images => {
    const { closeDialog } = this.props

    this.loadImages(images)
    closeDialog()
  }

  submit = async () => {
    const {
      images,
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const { onSubmit, afterSubmit, setFeedback } = this.props

    if (
      images.length > 0 &&
      finding &&
      equipment &&
      standardsClause &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      setFeedback({ error: '', loading: true })
      const dataToSave = {
        finding,
        equipment,
        standardsClause,
        probability,
        severity,
        comments,
        recommendations,
        images: images.slice(0, 4),
      }
      try {
        const result = await onSubmit(dataToSave)
        setFeedback({ loading: false })
        afterSubmit && afterSubmit(result)
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const {
      commonIssuesLoaded,
      equipmentsLoaded,
      // commonIssues,
      captureImage,
      openDialog,
      closeDialog,
      buttonText,
      error,
      loading,
    } = this.props

    const {
      images,
      // commonIssueIndex,
      commonIssue,
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const riskLevel =
      probability && severity ? riskLevels[probability - 1][severity - 1] : ''

    const imagesCopy =
      images &&
      images.map(({ image, imageNaturalAspectRatio }) =>
        Object.assign({}, { image, imageNaturalAspectRatio })
      )

    return commonIssuesLoaded && equipmentsLoaded ? (
      <StyledComplianceIssueForm className="StyledComplianceIssueForm">
        <Card>
          {images &&
            images.length === 1 && (
              <img src={images[0].image} alt="equipment type" />
            )}
          {images && images.length > 1 && <Carousel images={images} />}
          <CardContent className="card-content">
            {images &&
              images.length > 0 && (
                <Button
                  variant="fab"
                  color="primary"
                  aria-label="edit compliance issue"
                  className="edit-icon"
                  onClick={() =>
                    openDialog(() => (
                      <Sketch
                        aspectRatio={188 / 253}
                        images={imagesCopy}
                        onSubmit={this.saveImages}
                        closeDialog={closeDialog}
                      />
                    ))
                  }
                >
                  <BrushIcon />
                </Button>
              )}
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
                // captureImage({ width: 188, height: 253, multiple: true })
                captureImage({
                  width: 1024,
                  height: 1024 * 253 / 188,
                  multiple: true,
                  returnBlob: true,
                })
              }
            >
              Capture Image(s)
              <StayCurrentPortraitIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                label="Equipment"
                value={equipment}
                onChange={this.onValueInputChange('equipment')}
                getSuggestions={this.getEquipmentSuggestions}
              />

              <AutoComplete
                label="Select a common issue"
                value={commonIssue}
                onChange={this.onValueInputChange('commonIssue')}
                onSuggestionSelect={this.onCommonIssueSelect}
                getSuggestions={this.getCommonIssueSuggestions}
              />

              {/* <TextField
                fullWidth
                select
                label="Select a common issue"
                value={commonIssueIndex}
                onChange={this.onFindingChange}
                margin="normal"
              >
                {commonIssues.length > 0 ? (
                  commonIssues.map(({ finding }, index) => (
                    <MenuItem key={index} value={index}>
                      {finding}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value={''}>No common issue added</MenuItem>
                )}
              </TextField> */}

              <TextField
                fullWidth
                multiline
                label="Finding"
                value={finding}
                margin="normal"
                onChange={this.onEventInputChange('finding')}
              />

              <TextField
                fullWidth
                label="Standards Clause"
                value={standardsClause}
                onChange={this.onEventInputChange('standardsClause')}
                margin="normal"
              />

              <Grid container>
                <Grid item xs={12}>
                  <InputLabel className="risk-assessment">
                    Risk Assessment
                  </InputLabel>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    select
                    label="Probability"
                    value={probability}
                    onChange={this.onEventInputChange('probability')}
                    margin="normal"
                  >
                    {probabilities.map(({ probability, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {probability}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    select
                    label="Injury Severity"
                    value={severity}
                    onChange={this.onEventInputChange('severity')}
                    margin="normal"
                  >
                    {severities.map(({ serverity, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {serverity}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    disabled
                    label="Risk Level"
                    value={riskLevel}
                    margin="normal"
                  />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                multiline
                label="Comments"
                value={comments}
                margin="normal"
                onChange={this.onEventInputChange('comments')}
              />

              <TextField
                fullWidth
                multiline
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={this.onEventInputChange('recommendations')}
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
      </StyledComplianceIssueForm>
    ) : (
      <LinearProgress />
    )
  }
}
