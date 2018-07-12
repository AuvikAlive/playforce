import React, { Component } from 'react'
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
import {
  probabilities,
  severities,
  contextTypesUnsubscriber,
} from '../../../constants/'
import {
  onEventInputChange,
  onValueInputChange,
  saveEditedImages,
  getRiskLevel,
  getImagesCopy,
  showContentWhenLoaded,
} from '../../../functions/'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  onComponentWillReceiveProps,
  onCommonIssueSelect,
  onEquipmentSelect,
  getEquipmentSuggestions,
  submit,
} from './functions/'
import { CommonIssueAutoComplete } from './CommonIssueAutoComplete'
import { StyledComplianceIssueForm } from './StyledComplianceIssueForm'

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
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const riskLevel = getRiskLevel(probability, severity)
    const imagesCopy = getImagesCopy(images)
    const isLoaded = commonIssuesLoaded && equipmentsLoaded
    const imageLoaded = images && images.length === 1
    const imagesLoaded = images && images.length > 1

    return showContentWhenLoaded(
      isLoaded,
      <StyledComplianceIssueForm className="StyledComplianceIssueForm">
        <Card className="card">
          {imageLoaded && <img src={images[0].image} alt="equipment type" />}
          {imagesLoaded && <Carousel images={images} />}

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
                        onSubmit={saveEditedImages(this)}
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
                onSuggestionSelect={onEquipmentSelect(this)}
                getSuggestions={getEquipmentSuggestions(this)}
              />

              <CommonIssueAutoComplete
                commonIssues={commonIssues}
                onCommonIssueSelect={onCommonIssueSelect(this)}
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
                onClick={submit(this)}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledComplianceIssueForm>
    )
  }
}

ComplianceIssueForm.contextTypes = contextTypesUnsubscriber
