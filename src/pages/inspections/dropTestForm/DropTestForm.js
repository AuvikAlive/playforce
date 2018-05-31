import React, { Component } from 'react'
import Card, { CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import StayCurrentLandscapeIcon from 'material-ui-icons/StayCurrentLandscape'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { StyledDropTestForm } from './StyledDropTestForm'

export class DropTestForm extends Component {
  state = { dropNumber: '', dropHeight: '', hic: '', hicDuration: '', gmax: '' }

  onEventInputChange = onEventInputChange

  render() {
    const { dropNumber, dropHeight, hic, hicDuration, gmax } = this.state
    const { image, captureImage } = this.props
    const result =
      hic &&
      Number(hic) <= 1000 &&
      gmax &&
      Number(gmax) <= 200 &&
      hicDuration &&
      Number(hicDuration) > 3
        ? 'Satisfactory'
        : 'Not Satisfactory'

    return (
      <StyledDropTestForm className="StyledDropTestForm">
        <Card>
          {image && <img src={image} alt="cover" />}

          <CardContent>
            <Button
              fullWidth
              variant="raised"
              color="primary"
              className="submit-button"
              onClick={() =>
                captureImage({ width: 1024, height: 1024 * 432 / 764 })
              }
            >
              Capture Image
              <StayCurrentLandscapeIcon className="button-icon" />
            </Button>

            <form noValidate>
              <TextField
                fullWidth
                type="number"
                margin="normal"
                label="Drop Number"
                value={dropNumber}
                onChange={this.onEventInputChange('dropNumber')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Drop Height"
                value={dropHeight}
                onChange={this.onEventInputChange('dropHeight')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="HIC"
                value={hic}
                onChange={this.onEventInputChange('hic')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="HIC Duration (ms)"
                value={hicDuration}
                onChange={this.onEventInputChange('hicDuration')}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Gmax (g)"
                value={gmax}
                onChange={this.onEventInputChange('gmax')}
              />

              <TextField
                fullWidth
                disabled
                margin="normal"
                label="Result"
                value={result}
                onChange={this.onEventInputChange('result')}
              />
            </form>
          </CardContent>
        </Card>
      </StyledDropTestForm>
    )
  }
}
