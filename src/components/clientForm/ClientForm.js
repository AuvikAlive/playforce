import React, { Component } from 'react'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { onEventInputChange } from '../../functions/onEventInputChange'
import { submit } from './submit'

export class ClientForm extends Component {
  state = {
    client: '',
  }

  onEventInputChange = onEventInputChange

  render() {
    const { client } = this.state
    const { error, loading } = this.props

    return (
      <CardContent>
        <TextField
          fullWidth
          label="Client"
          value={client}
          onChange={this.onEventInputChange('client')}
          margin="normal"
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
            color="primary"
            className="submit-button"
            onClick={submit(this)}
          >
            Add Client
          </Button>
        )}
      </CardContent>
    )
  }
}
