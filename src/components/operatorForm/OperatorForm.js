import React, { Component } from 'react'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { onEventInputChange } from '../../functions/'
import { submit } from './submit'

export class OperatorForm extends Component {
  state = {
    operator: '',
  }

  onEventInputChange = onEventInputChange

  render() {
    const { operator } = this.state
    const { error, loading } = this.props

    return (
      <CardContent>
        <TextField
          fullWidth
          label="operator"
          value={operator}
          onChange={this.onEventInputChange('operator')}
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
            Add operator
          </Button>
        )}
      </CardContent>
    )
  }
}
