import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import { inspectionTypes } from '../inspectionTypes'
import { onComponentDidMount } from './onComponentDidMount'
import { onSelectChange } from './onSelectChange'

export class SelectInspectionType extends Component {
  state = { inspectionType: '' }

  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { inspectionType } = this.state

    return (
      <TextField
        fullWidth
        select
        label="Inspection Type"
        value={inspectionType}
        onChange={onSelectChange(this)}
        margin="normal"
        SelectProps={{
          MenuProps: {
            MenuListProps: { disablePadding: true },
          },
        }}
      >
        {inspectionTypes.map(({ name, value }, index) => {
          return (
            <MenuItem key={index} value={value}>
              {name}
            </MenuItem>
          )
        })}
      </TextField>
    )
  }
}
