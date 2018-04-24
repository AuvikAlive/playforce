import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import isEmpty from 'lodash/isEmpty'
import { makeDefaultSummary } from './makeDefaultSummary'
import { StyledAuditSummary } from './StyledAuditSummary'

export class AuditSummary extends Component {
  state = {
    summary: '',
  }
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      inspectionLoaded,
      fetchInspection,
      auditSummary,
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

    !inspectionLoaded && fetchInspection(userId, inspectionId)
    this.loadInitialData(auditSummary)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  componentWillReceiveProps({ inspectionLoaded, auditSummary, cover }) {
    inspectionLoaded && this.loadInitialData(auditSummary, cover)
  }

  loadInitialData = (auditSummary, cover) => {
    isEmpty(auditSummary)
      ? this.setState({ summary: makeDefaultSummary(cover) })
      : this.setState({ ...auditSummary })
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  addInspectionSummary = () => {
    const {
      addInspectionSummary,
      history,
      setFeedback,
      profile: { displayName, title, company, signature },
    } = this.props
    const { summary } = this.state

    if (summary) {
      addInspectionSummary({
        summary,
        displayName,
        title,
        company,
        signature,
      })
      history.goBack()
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { summary } = this.state
    const {
      profile: { displayName, title, company, signature },
      error,
    } = this.props

    return (
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

            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={this.addInspectionSummary}
            >
              save
            </Button>
          </CardContent>
        </Card>
      </StyledAuditSummary>
    )
  }
}

AuditSummary.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
