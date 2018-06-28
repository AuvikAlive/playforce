import React, { Component } from 'react'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import { onEventInputChange } from '../../../utilities/onEventInputChange'

export class InspectionTypeForm extends Component {
  state = {
    inspectionType: '',
  }

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { inspectionType } = this.state
    const { setFeedback, userId } = this.props

    if (inspectionType) {
      setFeedback({ error: '', loading: true })

      const { saveInspectionType } = this.props

      try {
        await saveInspectionType(userId, { name: inspectionType })
        this.setState({ inspectionType: '' })
        setFeedback({ success: 'Inspection type added!', loading: false })
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
    const { inspectionType } = this.state
    const { error, loading } = this.props

    return (
      <CardContent>
        <TextField
          fullWidth
          label="Inspection Type"
          value={inspectionType}
          onChange={this.onEventInputChange('inspectionType')}
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
            Add
          </Button>
        )}
      </CardContent>
    )
  }
}
