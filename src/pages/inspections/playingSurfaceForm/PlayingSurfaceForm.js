import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { Content } from '../../../components/content/Content'
import { surfaceTypes, materials, surfaceConditions } from '../../../constants/'
import {
  onComponentDidMountLoadData,
  onComponentWillReceivePropsLoadData,
  onEventInputChange,
} from '../../../functions/'
import { state } from './state'
import { submit } from './submit'

class PlayingSurfaceFormWithout extends Component {
  state = state

  componentDidMount() {
    onComponentDidMountLoadData(this)
  }

  componentWillReceiveProps(nextProps) {
    onComponentWillReceivePropsLoadData(this, nextProps)
  }

  render() {
    const { surfaceType, material, impactArea, condition } = this.state
    const { buttonText, error, loading } = this.props

    return (
      <Content>
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                select
                margin="normal"
                label="Surface Type"
                value={surfaceType}
                onChange={onEventInputChange(this, 'surfaceType')}
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
                onChange={onEventInputChange(this, 'material')}
              >
                {materials.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                type="number"
                margin="normal"
                label="Estimated impact area"
                value={impactArea}
                onChange={onEventInputChange(this, 'impactArea')}
              />

              <TextField
                fullWidth
                select
                margin="normal"
                label="Condition"
                value={condition}
                onChange={onEventInputChange(this, 'condition')}
              >
                {surfaceConditions.map(item => (
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
                variant="contained"
                color="primary"
                className="submit-button"
                onClick={submit(this)}
              >
                {buttonText ? buttonText : 'Publish'}
              </Button>
            )}
          </CardContent>
        </Card>
      </Content>
    )
  }
}

export const PlayingSurfaceForm = withFeedback(PlayingSurfaceFormWithout)
