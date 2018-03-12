import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import { CircularProgress } from 'material-ui/Progress'
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
    const { history } = this.props

    setNavTitle('Add Audit Summary')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    const width = document.querySelector('.m-signature-pad--body').clientWidth

    this.mySignature.refs.cv.width = width
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

  render() {
    const { summary, error, loading } = this.state
    const { displayName } = this.props

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
                <InputLabel>Signature</InputLabel>
                <Input
                  inputComponent={() => (
                    <SignaturePad
                      ref={input => {
                        this.mySignature = input
                      }}
                    />
                  )}
                  endAdornment={
                    <InputAdornment
                      position="end"
                      style={{ cursor: 'pointer' }}
                      onClick={() => this.mySignature.clear()}
                    >
                      Clear
                    </InputAdornment>
                  }
                />
              </FormControl>

              <TextField
                fullWidth
                label="Inspector Name"
                value={displayName}
                margin="normal"
              >
                {displayName}
              </TextField>

              <TextField
                fullWidth
                label="Inspector Title"
                value={displayName}
                margin="normal"
              >
                {displayName}
              </TextField>

              <TextField
                fullWidth
                label="Company Name"
                value={displayName}
                margin="normal"
              >
                {displayName}
              </TextField>
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
