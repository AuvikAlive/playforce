import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { StyledStandardAuditSummary } from './StyledStandardAuditSummary'

export class StandardAuditSummary extends Component {
  state = { standardAuditSummary: '' }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history, standardAuditSummary } = this.props

    setNavTitle('Standard Audit Summary')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    standardAuditSummary && this.setState({ standardAuditSummary })
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { updateProfile, setFeedback } = this.props
    const { standardAuditSummary } = this.state

    setFeedback({ error: '', loading: true })

    if (standardAuditSummary) {
      try {
        await updateProfile({ standardAuditSummary })
        setFeedback({ success: 'Summary updated!', loading: false })
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
        loading: false,
      })
    }
  }

  render() {
    const { standardAuditSummary } = this.state
    const { error, loading } = this.props

    return (
      <StyledStandardAuditSummary className="StyledStandardAuditSummary">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Summary"
                value={standardAuditSummary}
                margin="normal"
                onChange={this.onEventInputChange('standardAuditSummary')}
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
                save
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledStandardAuditSummary>
    )
  }
}

StandardAuditSummary.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
