import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import BrushIcon from '@material-ui/icons/Brush'
import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { Carousel } from '../../../components/carousel/Carousel'
import { Sketch } from '../../../components/sketch/Sketch'
import { probabilities, severities, riskLevels } from '../../../constants/'
import { onEventInputChange } from '../../../functions/onEventInputChange'
import { onValueInputChange } from '../../../functions/onValueInputChange'
import { CommonIssueAutoComplete } from './CommonIssueAutoComplete'
import { getEquipmentSuggestions } from '../getEquipmentSuggestions'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  onComponentWillReceiveProps,
} from './functions/'
import { StyledComplianceIssueForm } from './StyledComplianceIssueForm'

const defaultRecommendation =
  'No action required. Consider the findings of this report when determining priority for asset repair/replacement.'

export class ComplianceIssueForm extends Component {
  state = {
    commonIssues: [],
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
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceiveProps(this, nextProps)
  }

  onEventInputChange = onEventInputChange
  onValueInputChange = onValueInputChange

  makeRecommendations = () => {
    const { preimplementationRecommendation } = this.props

    return preimplementationRecommendation || defaultRecommendation
  }

  onCommonIssueSelect = value => {
    const { equipment } = this.state
    const { equipments } = this.props
    const { estimatedDateInstalled } = equipments.find(
      item => item.equipment === equipment
    )
    const { implementationDate, preImplementationText, comments } = value

    if (
      estimatedDateInstalled &&
      implementationDate &&
      Number(estimatedDateInstalled) < Number(implementationDate)
    ) {
      this.setState({
        ...value,
        comments: comments + '\n' + preImplementationText,
        recommendations: this.makeRecommendations(),
      })
    } else {
      this.setState({ ...value })
    }
  }

  onEquipmentSelect = value => {
    const { equipments, initialData } = this.props
    const equipment = equipments.find(({ equipment }) => equipment === value)

    if (equipment) {
      const { estimatedDateInstalled } = equipment
      const { id } = this.state
      const { commonIssues } = this.props
      const commonIssue = commonIssues.find(item => item.id === id)

      if (
        estimatedDateInstalled &&
        commonIssue &&
        commonIssue.implementationDate &&
        Number(estimatedDateInstalled) < Number(commonIssue.implementationDate)
      ) {
        this.setState({
          ...equipment,
          comments:
            commonIssue.comments + '\n' + commonIssue.preImplementationText,
          recommendations: this.makeRecommendations(),
        })
      } else {
        this.setState({
          ...initialData,
          ...equipment,
        })
      }
    } else {
      this.setState({ equipment: value })
    }
  }

  loadImages = images => this.setState({ images })

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
      commonIssues,
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
      // commonIssue,
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
        <Card className="card">
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
                  height: (1024 * 253) / 188,
                  multiple: true,
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
                onSuggestionSelect={this.onEquipmentSelect}
                getSuggestions={getEquipmentSuggestions(this)}
              />

              <CommonIssueAutoComplete
                commonIssues={commonIssues}
                onCommonIssueSelect={this.onCommonIssueSelect}
              />

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

ComplianceIssueForm.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
