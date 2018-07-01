import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { onEventInputChange } from '../../../functions/onEventInputChange'
import { StyledImpactSurfaceDetailsForm } from './StyledImpactSurfaceDetailsForm'

const conditions = ['Excellent', 'Good', 'Average', 'Poor', 'Failed']
const surfaceTypes = ['Unitary', 'Loose-fill']
const materials = ['Sand', 'Bark', 'Rubber', 'Synthetic']

class ImpactSurfaceDetailsFormWithout extends Component {
  state = { location: '', surfaceType: '', material: '', condition: '' }

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
    const { location, surfaceType, material, condition } = this.state
    const { setFeedback, onSubmit, afterSubmit } = this.props

    if (location && surfaceType && material && condition) {
      setFeedback({ error: '', loading: true })

      try {
        const result = await onSubmit({
          location,
          surfaceType,
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
    const { location, surfaceType, material, condition } = this.state
    const { buttonText, error, loading } = this.props

    return (
      <StyledImpactSurfaceDetailsForm className="StyledImpactSurfaceDetailsForm">
        <Card className="card">
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
                label="Surface Type"
                value={surfaceType}
                onChange={this.onEventInputChange('surfaceType')}
              >
                {surfaceTypes.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                select
                margin="normal"
                label="Material"
                value={material}
                onChange={this.onEventInputChange('material')}
              >
                {materials.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

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
