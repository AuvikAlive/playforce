import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { withFeedback } from '../../../hocs/withFeedback/withFeedback'
import { Content } from '../../../components/content/Content'
import { NavContext } from "components/NavContextProvider/"
import {
  onComponentDidMountWithTitleLeftNav,
  onComponentWillUnmountWithTitleLeftNav,
  onEventInputChange,
} from '../../../functions/'
import { equipmentSettings } from './equipmentSettings'
import { calculateImpactArea, getError } from './functions/'

class BaseImpactAreaExtentCalculator extends Component {
  state = { equipmentSetting: '', freeFallHeight: '' }

  componentDidMount() {
    onComponentDidMountWithTitleLeftNav(this, 'Impact Area Extent Calculator')
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { equipmentSetting, freeFallHeight } = this.state
    const impactArea = calculateImpactArea(freeFallHeight)
    const error = getError(freeFallHeight, equipmentSetting)

    return (
      <Content>
        <Card className="card">
          <CardContent>
            <form noValidate>
              <TextField
                fullWidth
                select
                label="Equipment Setting"
                value={equipmentSetting}
                onChange={onEventInputChange(this, 'equipmentSetting')}
                margin="normal"
              >
                {equipmentSettings.map((equipmentSetting, index) => (
                  <MenuItem key={index} value={equipmentSetting}>
                    {equipmentSetting}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                fullWidth
                label="Free Height of Fall (mm)"
                type="number"
                value={freeFallHeight}
                margin="normal"
                inputProps={{
                  min: 0,
                }}
                onChange={onEventInputChange(this, 'freeFallHeight')}
              />

              <TextField
                disabled
                fullWidth
                label="Minimum Dimension of Impact Area"
                value={impactArea}
                margin="normal"
              />
            </form>

            {error && <p className="error">{error}</p>}
          </CardContent>
        </Card>
      </Content>
    )
  }
}

BaseImpactAreaExtentCalculator.contextType = NavContext

export const ImpactAreaExtentCalculator = withFeedback(
  BaseImpactAreaExtentCalculator
)
