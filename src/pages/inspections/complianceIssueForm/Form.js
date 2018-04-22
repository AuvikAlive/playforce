import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input'
import Grid from 'material-ui/Grid'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import BrushIcon from 'material-ui-icons/Brush'
import StayCurrentPortraitIcon from 'material-ui-icons/StayCurrentPortrait'
import {
  probabilities,
  severities,
  riskLevels,
} from '../../../globals/constants'
import { AutoComplete } from '../../../components/autoComplete/AutoComplete'
import { Carousel } from '../../../components/carousel/Carousel'
import { StyledNavLink } from '../../../components/styledNavLink/StyledNavLink'
import { StyledComplianceIssueForm } from './StyledComplianceIssueForm'

export class Form extends Component {
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
    const {
      setRightNav,
      commonIssuesLoaded,
      fetchCommonIssuesRealTime,
      userId,
      initialData,
    } = this.props

    setRightNav && setRightNav()
    !commonIssuesLoaded && fetchCommonIssuesRealTime(userId)
    initialData && this.loadInitialData(initialData)
  }

  componentWillUnmount() {
    const { removeRightNav } = this.props
    removeRightNav && removeRightNav()
  }

  componentWillReceiveProps({ imageCaptured, images }) {
    if (imageCaptured) {
      const { setFeedback, loadImages } = this.props
      const notPortrait = images.some(
        ({ imageNaturalAspectRatio }) => imageNaturalAspectRatio > 1
      )

      loadImages(images)

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

  loadInitialData = complianceIssue => {
    const { setCapturedImage } = this.props
    const { images } = complianceIssue

    setCapturedImage(images)
    this.setState({
      ...complianceIssue,
    })
  }

  onFindingChange = event => {
    const commonIssueIndex = event.target.value
    const {
      finding,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.props.commonIssues[commonIssueIndex]

    this.setState({
      finding,
      commonIssueIndex,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  onAutoCompleteChange = value => {
    this.setState({ equipment: value.equipment || value })
  }

  onSubmit = () => {
    const {
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    const { onSubmit, setFeedback, images } = this.props

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
      setFeedback({ error: '' })
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
      onSubmit(dataToSave)
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const {
      commonIssuesLoaded,
      commonIssues,
      images,
      captureImage,
      equipments,
      match,
      error,
    } = this.props

    const {
      commonIssueIndex,
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

    return commonIssuesLoaded ? (
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
                <StyledNavLink
                  to={`${match.url}/editImages`}
                  className="edit-icon"
                >
                  <Button
                    variant="fab"
                    color="primary"
                    aria-label="edit compliance issue"
                  >
                    <BrushIcon />
                  </Button>
                </StyledNavLink>
              )}
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
                captureImage({ width: 188, height: 253, multiple: true })
              }
            >
              Capture Image(s)
              <StayCurrentPortraitIcon className="button-icon" />
            </Button>

            <form noValidate>
              <AutoComplete
                onChange={this.onAutoCompleteChange}
                domain={equipments}
                label="Equipment"
                value={equipment}
                filterProperty="equipment"
              />

              <TextField
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
              </TextField>

              <TextField
                fullWidth
                multiline
                label="Finding"
                value={finding}
                margin="normal"
                onChange={this.onInputChange('finding')}
              />

              <TextField
                fullWidth
                label="Standards Clause"
                value={standardsClause}
                onChange={this.onInputChange('standardsClause')}
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
                    onChange={this.onInputChange('probability')}
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
                    onChange={this.onInputChange('severity')}
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
                onChange={this.onInputChange('comments')}
              />

              <TextField
                fullWidth
                multiline
                label="Recommendations"
                value={recommendations}
                margin="normal"
                onChange={this.onInputChange('recommendations')}
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
      </StyledComplianceIssueForm>
    ) : (
      <LinearProgress />
    )
  }
}
