import React from 'react'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { defaultManufacturers, conditions } from '../../globals/scales'

export const ConditionRatingForm = ({
  equipment,
  manufacturer,
  customManufacturer,
  manufacturers,
  condition,
  onManufacturerChange,
  onCustomManufacturerChange,
  onInputChange,
}) => {
  return (
    <form noValidate>
      <TextField
        fullWidth
        label="Equipment"
        value={equipment}
        margin="normal"
        onChange={onInputChange('equipment')}
      />

      <TextField
        fullWidth
        label="Manufacturer"
        value={customManufacturer}
        margin="normal"
        onChange={onCustomManufacturerChange}
      />

      <TextField
        fullWidth
        select
        label="Select a Manufacturer"
        value={manufacturer}
        onChange={onManufacturerChange}
        margin="normal"
      >
        {manufacturers.length > 0
          ? manufacturers.map(({ name }, index) => {
              return (
                <MenuItem key={index} value={name}>
                  {name}
                </MenuItem>
              )
            })
          : defaultManufacturers.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              )
            })}
      </TextField>

      <TextField
        fullWidth
        select
        label="Condition"
        value={condition}
        onChange={onInputChange('condition')}
        margin="normal"
      >
        {conditions.map(item => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField>
    </form>
  )
}
