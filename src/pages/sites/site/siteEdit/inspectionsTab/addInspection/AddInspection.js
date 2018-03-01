import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card, { CardContent } from 'material-ui/Card'
import { MenuItem } from 'material-ui/Menu'
import TextField from 'material-ui/TextField'
import { StyledAppInspection } from './StyledAddInspection'

const inspectionTypes = ['Routine', 'Operational', 'Comprehensive']
const frequencies = ['Weekly', 'Monthly', 'Annually']
const assignees = ['Justin Kaese', 'Joe Bloggs', 'Jane Doe']

export class AddInspection extends Component {
  state = {
    inspectionType: '',
    frequency: '',
    assignedTo: '',
  }

  componentDidMount() {
    this.context.setNavTitle('Add Inspection')
  }

  componentWillUnmount() {
    this.context.setNavTitle('Edit Site')
  }

  onSelectChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { inspectionType, frequency, assignedTo } = this.state

    return (
      <StyledAppInspection>
        <Card className="card">
          <CardContent>
            <TextField
              fullWidth
              id="inspection-type"
              select
              label="Inspection Type"
              value={inspectionType}
              onChange={this.onSelectChange('inspectionType')}
              margin="normal"
            >
              {inspectionTypes.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              id="frequency"
              select
              label="Frequency"
              value={frequency}
              onChange={this.onSelectChange('frequency')}
              margin="normal"
            >
              {frequencies.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              id="assigned-to"
              select
              label="Assigned To"
              value={assignedTo}
              onChange={this.onSelectChange('assignedTo')}
              margin="normal"
            >
              {assignees.map(item => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextField>
          </CardContent>
        </Card>
      </StyledAppInspection>
    )
  }
}

AddInspection.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
