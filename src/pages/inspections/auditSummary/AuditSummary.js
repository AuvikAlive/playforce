import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
} from '../../../functions/'
import { onComponentDidMount, submit } from './functions/'
import { StyledAuditSummary } from './StyledAuditSummary'

export class AuditSummary extends Component {
  state = {
    summary: '',
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { summary } = this.state

    const {
      displayName,
      title,
      company,
      signature,
      error,
      loading,
    } = this.props

    return (
      <StyledAuditSummary className="StyledAuditSummary">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Summary"
                value={summary}
                margin="normal"
                onChange={onEventInputChange(this, 'summary')}
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
                onClick={submit(this)}
              >
                save
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledAuditSummary>
    )
  }
}

AuditSummary.contextTypes = contextTypesTitleLeftNavUnsubscriber
