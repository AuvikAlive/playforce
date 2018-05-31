import React, { Component } from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card, { CardContent } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { onEventInputChange } from '../../../utilities/onEventInputChange'
import { StyledImpactSurfaceDetails } from './StyledImpactSurfaceDetails'

const conditions = ['Excellent', 'Good', 'Average', 'Poor', 'Failed']
const descriptions = ['Unitary - Sand', 'Loose-fill - Bark']

export class ImpactSurfaceDetails extends Component {
  state = { location: '', description: '', material: '', condition: '' }

  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const { history } = this.props

    setNavTitle('Surface Details')

    setLeftNavComponent(
      <IconButton
        color="inherit"
        aria-label="navigate back"
        onClick={() => history.goBack()}
      >
        <ArrowBackIcon />
      </IconButton>
    )
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  onEventInputChange = onEventInputChange

  render() {
    const { location, description, material, condition } = this.state

    return (
      <StyledImpactSurfaceDetails className="StyledImpactSurfaceDetails">
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
          </CardContent>
        </Card>
      </StyledImpactSurfaceDetails>
    )
  }
}

ImpactSurfaceDetails.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
