import React, { Component } from 'react'
import { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'

export class Form extends Component {
  state = {
    operator: '',
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async () => {
    const { operator } = this.state
    const { saveOperator, userId, setFeedback } = this.props

    if (operator) {
      setFeedback({ error: '', loading: true })

      try {
        await saveOperator(userId, { name: operator })
        setFeedback({ loading: false })
        this.setState({ operator: '' })
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
    const { operator } = this.state
    const { error, loading } = this.props

    return (
      <CardContent>
        <TextField
          fullWidth
          label="operator"
          value={operator}
          onChange={this.onInputChange('operator')}
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
            Add operator
          </Button>
        )}
      </CardContent>
    )
  }
}
