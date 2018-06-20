import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import isEmpty from 'lodash/isEmpty'
import { makeDefaultSummary } from './makeDefaultSummary'
import { StyledAuditSummary } from './StyledAuditSummary'

export class AuditSummary extends Component {
  state = {
    summary: '',
  }

  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent, addUnsubscriber } = this.context
    const {
      inspectionLoaded,
      fetchInspectionRealTime,
      auditSummary,
      cover,
      userId,
      inspectionId,
      history,
    } = this.props

    setNavTitle('Audit Summary')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !inspectionLoaded &&
      addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
    !isEmpty(cover) && this.loadInitialData(auditSummary, cover)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  componentWillReceiveProps({ inspectionLoaded, auditSummary, cover }) {
    inspectionLoaded &&
      (isEmpty(auditSummary) || auditSummary !== this.props.auditSummary) &&
      cover !== this.props.cover &&
      this.loadInitialData(auditSummary, cover)
  }

  loadInitialData = (auditSummary, cover) => {
    const {
      profile: { standardAuditSummary },
    } = this.props

    isEmpty(auditSummary)
      ? this.setState({
          summary: standardAuditSummary || makeDefaultSummary(cover),
        })
      : this.setState({ ...auditSummary })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async () => {
    const {
      updateAuditSummary,
      userId,
      inspectionId,
      setFeedback,
      profile: { displayName, title, company, signature },
    } = this.props
    const { summary } = this.state

    if (summary) {
      setFeedback({ error: '', loading: true })
      await updateAuditSummary(userId, inspectionId, {
        summary,
        displayName,
        title,
        company,
        signature,
      })
      setFeedback({ success: 'Audit Summary saved!', loading: false })
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { summary } = this.state
    const {
      inspectionLoaded,
      profile: { displayName, title, company, signature },
      error,
      loading,
    } = this.props

    return inspectionLoaded ? (
      <StyledAuditSummary className="StyledAuditSummary">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Summary"
                value={summary}
                margin="normal"
                onChange={this.onInputChange('summary')}
              />

              {signature && (
                <div>
                  <FormControl fullWidth>
                    <InputLabel
                      shrink={false}
                      focused={false}
                      className="signature-label"
                    >
                      Signature
                    </InputLabel>
                  </FormControl>

                  <img src={signature} alt="signature" className="signature" />
                </div>
              )}

              <TextField
                fullWidth
                disabled
                label="Inspector Name"
                value={displayName}
                margin="normal"
              />

              {title && (
                <TextField
                  fullWidth
                  disabled
                  label="Inspector Title"
                  value={title}
                  margin="normal"
                />
              )}

              {company && (
                <TextField
                  fullWidth
                  disabled
                  label="Company Name"
                  value={company}
                  margin="normal"
                />
              )}
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
                save
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledAuditSummary>
    ) : (
      <LinearProgress />
    )
  }
}

AuditSummary.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
