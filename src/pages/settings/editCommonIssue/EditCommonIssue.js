import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import { CircularProgress } from 'material-ui/Progress'
import TextField from 'material-ui/TextField'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Grid from 'material-ui/Grid'
import values from 'lodash/values'
import Modal from '../../../components/modal/Modal'
import { ModalDeleteContent } from '../../../components/modalDeleteContent/ModalDeleteContent'
import { StyledCommonIssue } from './StyledEditCommonIssue'
import { probabilities, severities, riskLevels } from '../../../globals/scales'

const defaultStandards = [
  'Default Standard 1',
  'Default Standard 2',
  'Default Standard 3',
]

export class EditCommonIssue extends Component {
  state = {
    finding: '',
    appliedStandard: '',
    probability: '',
    severity: '',
    comments: '',
    recommendations: '',
    modalOpen: false,
    error: '',
    loading: false,
  }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, firestore, userId, commonIssueId } = this.props

    setNavTitle('Edit Issue')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    firestore.setListeners([
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'standards' }],
      },
      {
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues', doc: commonIssueId }],
      },
    ])
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context
    const { firestore, userId, commonIssueId } = this.props

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
        subcollections: [{ collection: 'commonIssues', doc: commonIssueId }],
      },
    ])
  }

  componentWillReceiveProps({ data, userId, commonIssueId }) {
    if (data.commonIssues && data.commonIssues[commonIssueId]) {
      const {
        finding,
        appliedStandard,
        probability,
        severity,
        comments,
        recommendations,
      } = data.commonIssues[commonIssueId]

      this.setState({
        finding,
        appliedStandard,
        probability,
        severity,
        comments,
        recommendations,
      })
    }
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  publish = async () => {
    const {
      finding,
      appliedStandard,
      probability,
      severity,
      comments,
      recommendations,
    } = this.state
    const { firestore, userId, commonIssueId } = this.props

    if (
      finding &&
      appliedStandard &&
      probability &&
      severity &&
      comments &&
      recommendations
    ) {
      try {
        this.setState({ error: '', loading: true })

        await firestore.update(
          {
            collection: 'users',
            doc: userId,
            subcollections: [
              { collection: 'commonIssues', doc: commonIssueId },
            ],
          },
          {
            finding,
            appliedStandard,
            probability,
            severity,
            comments,
            recommendations,
          },
        )
        this.setState({ loading: false })
      } catch (error) {
        this.setState({ error: error.message, loading: false })
      }
    } else {
      this.setState({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  delete = async () => {
    const { history, firestore, userId, commonIssueId } = this.props

    try {
      await firestore.delete({
        collection: 'users',
        doc: userId,
        subcollections: [{ collection: 'commonIssues', doc: commonIssueId }],
      })

      this.setState({ loading: false })
      history.goBack()
    } catch (error) {
      this.setState({ error: error.message, loading: false })
    }
  }

  render() {
    const {
      finding,
      appliedStandard,
      probability,
      severity,
      comments,
      recommendations,
      modalOpen,
      error,
      loading,
    } = this.state

    const riskLevel =
      probability && severity ? riskLevels[probability - 1][severity - 1] : ''

    const { data } = this.props

    let standards = []

    if (data) {
      standards = values(data.standards)
    }

    return (
      <StyledCommonIssue className="StyledCommonIssue">
        <Card>
          <CardContent>
            <TextField
              fullWidth
              label="Finding"
              value={finding}
              onChange={this.onInputChange('finding')}
              margin="normal"
            />

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
                color="inherit"
                className="submit-button discard-button"
                onClick={this.openModal}
              >
                Delete
              </Button>
            )}

            {!loading && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={this.publish}
              >
                Publish Changes
              </Button>
            )}
          </CardContent>
        </Card>
        <Modal open={modalOpen} handleClose={this.closeModal} hideCloseIcon>
          <ModalDeleteContent
            handleConfirmation={this.delete}
            closeModal={this.closeModal}
          />
        </Modal>
      </StyledCommonIssue>
    )
  }
}

EditCommonIssue.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
