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
import Modal from '../../../components/modal/Modal'
import { ModalDeleteContent } from '../../../components/modalDeleteContent/ModalDeleteContent'
import { StyledEditCompliaceIssue } from './StyledEditComplianceIssue'
import { probabilities, severities, riskLevels } from '../../../globals/scales'

const defaultStandards = [
  'Default Standard 1',
  'Default Standard 2',
  'Default Standard 3',
]

export class EditComplianceIssue extends Component {
  state = {
    modalOpen: false,
    commonIssues: [],
    commonIssueIndex: '',
    image: null,
    finding: '',
    appliedStandard: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
    customFinding: true,
    error: '',
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId, complianceIssue } = this.props

    setNavTitle('Edit Compliance Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    this.loadInitialData(complianceIssue)

    firestore.setListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'standards' }],
      },
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
        subcollections: [{ collection: 'standards' }],
      },
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

  loadInitialData = ({
    image,
    finding,
    appliedStandard,
    probability,
    severity,
    comments,
    recommendations,
  }) => {
    this.setState({
      image,
      finding,
      appliedStandard,
      probability,
      severity,
      comments,
      recommendations,
    })
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

  onFindingChange = event => {
    const commonIssueIndex = event.target.value
    const {
      appliedStandard,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state.commonIssues[commonIssueIndex]

    this.setState({
      commonIssueIndex,
      appliedStandard,
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

  toggleCustomFinding = () => {
    const { customFinding } = this.state

    this.setState({
      customFinding: !customFinding,
    })
  }

  editComplianceIssue = () => {
    const { editComplianceIssue } = this.props
    const {
      commonIssues,
      commonIssueIndex,
      image,
      appliedStandard,
      probability,
      severity,
      comments,
      recommendations,
      customFinding,
    } = this.state

    let { finding } = this.state

    if (!customFinding) {
      finding = commonIssues[commonIssueIndex].finding
    }

    if (
      image &&
      finding &&
      appliedStandard &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      this.setState({ error: '' })
      editComplianceIssue({
        issueIndex: this.props.complianceIssueIndex,
        updatedValue: {
          image,
          finding,
          appliedStandard,
          probability,
          severity,
          comments,
          recommendations,
        },
      })
    } else {
      this.setState({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  delete = () => {
    const { deleteComplianceIssue, complianceIssueIndex, history } = this.props

    deleteComplianceIssue(complianceIssueIndex)
    history.goBack()
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  render() {
    const {
      modalOpen,
      commonIssues,
      commonIssueIndex,
      image,
      finding,
      appliedStandard,
      probability,
      severity,
      comments,
      recommendations,
      customFinding,
      error,
    } = this.state

    const riskLevel =
      probability && severity ? riskLevels[probability - 1][severity - 1] : ''

    const { data } = this.props

    const standards = data && data.standards ? values(data.standards) : []

    return (
      <StyledEditCompliaceIssue className="StyledEditCompliaceIssue">
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
              {!customFinding && (
                <TextField
                  fullWidth
                  select
                  label="Finding"
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
              )}

              {customFinding && (
                <TextField
                  fullWidth
                  multiline
                  rows="3"
                  label="Finding"
                  value={finding}
                  margin="normal"
                  onChange={this.onInputChange('finding')}
                />
              )}

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.toggleCustomFinding}
              >
                {customFinding ? 'Set Commong Findings' : 'Set Custom Finding'}
              </Button>

              <TextField
                fullWidth
                select
                label="Applied Standard"
                value={appliedStandard}
                onChange={this.onInputChange('appliedStandard')}
                margin="normal"
              >
                {standards.length > 0
                  ? standards.map(({ title, code }, index) => {
                      return (
                        <MenuItem key={index} value={`${title} ${code}`}>
                          {`${title} ${code}`}
                        </MenuItem>
                      )
                    })
                  : defaultStandards.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item}>
                          {item}
                        </MenuItem>
                      )
                    })}
              </TextField>

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
              color="inherit"
              className="submit-button discard-button"
              onClick={this.openModal}
            >
              delete
            </Button>

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.editComplianceIssue}
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

        <Modal open={modalOpen} handleClose={this.closeModal} hideCloseIcon>
          <ModalDeleteContent
            handleConfirmation={this.delete}
            closeModal={this.closeModal}
          />
        </Modal>
      </StyledEditCompliaceIssue>
    )
  }
}

EditComplianceIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
