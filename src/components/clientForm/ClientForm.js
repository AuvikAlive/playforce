import React, { Component } from 'react'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'

export class ClientForm extends Component {
  state = {
    client: '',
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async () => {
    const { client } = this.state
    const { setFeedback, userId } = this.props

    if (client) {
      setFeedback({ error: '', loading: true })
      const { saveClient } = this.props

      try {
        await saveClient(userId, { name: client })
        this.setState({ client: '' })
        setFeedback({ success: 'Client added!', loading: false })
      } catch (error) {
        setFeedback({ error: error.message, loading: false })
      }
    } else {
      setFeedback({
        error: 'Please fill up the form correctly!',
      })
    }
  }

  render() {
    const { client } = this.state
    const { error, loading } = this.props

    return (
      <CardContent>
        <TextField
          fullWidth
          label="Client"
          value={client}
          onChange={this.onInputChange('client')}
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
            onClick={this.submit}
          >
            Add Client
          </Button>
        )}
      </CardContent>
    )
  }
}
