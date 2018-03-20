import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input'
import Grid from 'material-ui/Grid'
import values from 'lodash/values'
import { StyledAddCompliaceIssue } from './StyledAddComplianceIssue'
import {
  probabilities,
  severities,
  riskLevels,
  defaultEquipments,
} from '../../../globals/scales'

export class AddComplianceIssue extends Component {
  state = {
    commonIssues: [],
    commonIssueIndex: '',
    defaultEquipmentIndex: '',
    image: null,
    finding: '',
    equipment: '',
    standardsClause: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId } = this.props

    setNavTitle('Add Compliance Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues' }],
      },
    ])
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context
    const { firestore, userId } = this.props

    removeNavTitle()
    removeLefNavComponent()

    firestore.unsetListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues' }],
      },
    ])
  }

  componentWillReceiveProps({ data, userId }) {
    const commonIssues = data.commonIssues && values(data.commonIssues)

    if (commonIssues) {
      this.setState({ commonIssues })
    }
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

  onEquipmentChange = event => {
    const defaultEquipmentIndex = event.target.value

    this.setState({
      defaultEquipmentIndex,
      equipment: defaultEquipments[defaultEquipmentIndex],
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
    } = this.state.commonIssues[commonIssueIndex]

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

  addComplianceIssue = () => {
    const { addComplianceIssue, history, setErrorLoadingState } = this.props
    const {
      image,
      finding,
      equipment,
      standardsClause,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state

    if (
      image &&
      finding &&
      equipment &&
      standardsClause &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      setErrorLoadingState({ error: '' })
      addComplianceIssue({
        image,
        finding,
        equipment,
        standardsClause,
        probability,
        severity,
        comments,
        recommendations,
      })
      history.goBack()
    } else {
      setErrorLoadingState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const {
      commonIssues,
      commonIssueIndex,
      defaultEquipmentIndex,
      image,
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

    const { error } = this.props

    return (
      <StyledAddCompliaceIssue className="StyledAddCompliaceIssue">
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
                select
                label="Select a common issue"
                value={commonIssueIndex}
                onChange={this.onFindingChange}
                margin="normal"
              >
                {commonIssues.length === 0 ? (
                  <MenuItem value={''}>No common issue added yet</MenuItem>
                ) : (
                  commonIssues.map(({ finding }, index) => (
                    <MenuItem key={index} value={index}>
                      {finding}
                    </MenuItem>
                  ))
                )}
              </TextField>

              <TextField
                fullWidth
                multiline
                rows="3"
                label="Finding"
                value={finding}
                margin="normal"
                onChange={this.onInputChange('finding')}
              />

              <TextField
                fullWidth
                label="Equipment"
                value={equipment}
                onChange={this.onInputChange('equipment')}
                margin="normal"
              />

              <TextField
                fullWidth
                select
                label="Equipment List"
                value={defaultEquipmentIndex}
                onChange={this.onEquipmentChange}
                margin="normal"
              >
                {defaultEquipments.map((item, index) => (
                  <MenuItem key={index} value={index}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

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
                rows="3"
                label="Comments"
                value={comments}
                margin="normal"
                onChange={this.onInputChange('comments')}
              />

              <TextField
                fullWidth
                multiline
                rows="3"
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
              onClick={this.addComplianceIssue}
            >
              save
            </Button>
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
      </StyledAddCompliaceIssue>
    )
  }
}

AddComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
