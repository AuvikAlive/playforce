import React, { Component } from 'react'
import { CircularProgress } from 'material-ui/Progress'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { StyledImpactSurfaceDetailsForm } from './StyledImpactSurfaceDetailsForm'

const conditions = ['Excellent', 'Good', 'Average', 'Poor', 'Failed']
const descriptions = ['Unitary - Sand', 'Loose-fill - Bark']

class ImpactSurfaceDetailsFormWithout extends Component {
  state = { location: '', description: '', material: '', condition: '' }

  componentDidMount() {
    const { initialData } = this.props

    this.loadInitialData(initialData)
  }

  componentWillReceiveProps({ initialData }) {
    if (initialData && initialData !== this.props.initialData) {
      this.loadInitialData(initialData)
    }
  }

  loadInitialData = initialData => {
    this.setState({ ...initialData })
  }

  onEventInputChange = onEventInputChange

  submit = async () => {
    const { location, description, material, condition } = this.state
    const { setFeedback, onSubmit, afterSubmit } = this.props

    if (location && description && material && condition) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          location,
          description,
          material,
          condition,
        })
        setFeedback({ loading: false })
        afterSubmit && afterSubmit(result)
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
    const { location, description, material, condition } = this.state
    const { buttonText, error, loading } = this.props

    return (
      <StyledImpactSurfaceDetailsForm className="StyledImpactSurfaceDetailsForm">
        <Card>
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                margin="normal"
                label="Location"
                value={location}
                onChange={this.onEventInputChange('location')}
              />

              <TextField
                fullWidth
                select
                margin="normal"
                label="Description"
                value={description}
                onChange={this.onEventInputChange('description')}
              >
                {descriptions.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                margin="normal"
                label="Material Type"
                value={material}
                onChange={this.onEventInputChange('material')}
              />

              <TextField
                fullWidth
                select
                margin="normal"
                label="Condition"
                value={condition}
                onChange={this.onEventInputChange('condition')}
              >
                {conditions.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>
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
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </StyledImpactSurfaceDetailsForm>
    )
  }
}

export const ImpactSurfaceDetailsForm = withFeedback(
  ImpactSurfaceDetailsFormWithout
)
