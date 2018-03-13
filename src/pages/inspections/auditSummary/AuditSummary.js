import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { InputLabel } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'
import SignaturePad from 'react-signature-pad'
import { StyledAuditSummary } from './StyledAuditSummary'

export class AuditSummary extends Component {
  state = {
    summary: '',
    error: false,
    loading: false,
  }
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { auditSummary } = this.props

    if (auditSummary) {
      const { summary, signature } = auditSummary

      this.setState({ summary })
      this.mySignature.fromDataURL(signature)
    }

    setNavTitle('Add Audit Summary')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="Search"
        onClick={this.addInspectionSummary}
      >
        <ArrowBackIcon />
      </IconButton>,
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  addInspectionSummary = () => {
    const { addInspectionSummary, history } = this.props
    const { summary } = this.state

    if (summary && !this.mySignature.isEmpty()) {
      addInspectionSummary({
        summary,
        signature: this.mySignature.toDataURL(),
      })
    }

    history.goBack()
  }

  render() {
    const { summary, error, loading } = this.state
    const { profile: { displayName, title, company } } = this.props

    return (
      <StyledAuditSummary className="StyledAuditSummary">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                rows="3"
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
                  <div>Signature</div>
                  <Button onClick={() => this.mySignature.clear()}>
                    Clear
                  </Button>
                </InputLabel>
                <SignaturePad
                  ref={input => {
                    this.mySignature = input
                  }}
                />
              </FormControl>

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
