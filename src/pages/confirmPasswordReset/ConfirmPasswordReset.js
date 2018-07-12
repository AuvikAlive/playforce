import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { StyledLink } from '../../components/styledLink/StyledLink'
import { onEventInputChange } from '../../functions/onEventInputChange'
import { contextTypes } from './contextTypes'
import {
  onComponentDidMount,
  onComponentWillUnmount,
  updatePassword,
} from './functions/'
import { StyledConfirmPasswordReset } from './StyledConfirmPasswordReset'

export class ConfirmPasswordReset extends Component {
  state = {
    code: '',
    success: false,
    password: '',
  }

  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmount(this)
  }

  onEventInputChange = onEventInputChange

  render() {
    const { success } = this.state
    const { error, loading } = this.props

    return (
      <StyledConfirmPasswordReset>
        <Card className="card">
          <CardContent>
            <TextField
              id="password"
              label="Password"
              type="password"
              margin="normal"
              fullWidth
              onChange={this.onEventInputChange('password')}
            />

            {error && <p className="error">{error}</p>}

            {!error &&
              loading && (
                <div className="loading">
                  <CircularProgress />
                </div>
              )}

            {success && (
              <p className="success">
                Password updated successfully. You can now{' '}
                <StyledLink to="/signIn">Sign In</StyledLink> with your new
                password!
              </p>
            )}

            {(!loading || success) && (
              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={updatePassword(this)}
              >
                Update Password
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledConfirmPasswordReset>
    )
  }
}

ConfirmPasswordReset.contextTypes = contextTypes
