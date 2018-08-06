import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { AvailablePlaceholders } from '../../../components/availablePlaceholders/AvailablePlaceholders'
import { contextTypesTitleLeftNav } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
} from '../../../functions/'
import { StyledStandardAuditSummary } from './StyledStandardAuditSummary'
import { state, placeholders } from './constants/'
import { onComponentDidMount, submit } from './functions/'

export class StandardAuditSummary extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { standardAuditSummary } = this.state
    const { error, loading } = this.props

    return (
      <StyledStandardAuditSummary className="StyledStandardAuditSummary">
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                multiline
                label="Summary"
                value={standardAuditSummary}
                margin="normal"
                onChange={onEventInputChange(this, 'standardAuditSummary')}
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
                onClick={submit(this)}
              >
                save
              </Button>
            )}
          </CardContent>
        </Card>

        <AvailablePlaceholders placeholders={placeholders} />
      </StyledStandardAuditSummary>
    )
  }
}

StandardAuditSummary.contextTypes = contextTypesTitleLeftNav
