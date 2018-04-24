import React, { Component } from 'react'
import { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { CircularProgress } from 'material-ui/Progress'
import Button from 'material-ui/Button'

export class Form extends Component {
  state = {
    manufacturer: '',
  }

  onInputChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  submit = async () => {
    const { manufacturer } = this.state
    const { saveManufacturer, userId, setFeedback } = this.props

    if (manufacturer) {
      setFeedback({ error: '', loading: true })

      try {
        await saveManufacturer(userId, { name: manufacturer })
        setFeedback({ loading: false })
        this.setState({ manufacturer: '' })
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
    const { manufacturer } = this.state
    const { error, loading } = this.props

    return (
      <CardContent>
        <TextField
          fullWidth
          label="Manufacturer"
          value={manufacturer}
          onChange={this.onInputChange('manufacturer')}
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
            Add manufacturer
          </Button>
        )}
      </CardContent>
    )
  }
}
