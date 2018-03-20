import React from 'react'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { defaultEquipments } from '../../globals/scales'

export const MaintenanceIssueForm = ({
  finding,
  equipment,
  defaultEquipmentIndex,
  recommendations,
  onEquipmentChange,
  onInputChange,
}) => {
  return (
    <form noValidate>
      <TextField
        fullWidth
        multiline
        rows="3"
        label="Finding"
        value={finding}
        margin="normal"
        onChange={onInputChange('finding')}
      />

      <TextField
        fullWidth
        label="Equipment"
        value={equipment}
        onChange={onInputChange('equipment')}
        margin="normal"
      />

      <TextField
        fullWidth
        select
        label="Select an Equipment"
        value={defaultEquipmentIndex}
        onChange={onEquipmentChange}
        margin="normal"
      >
        {defaultEquipments.map((item, index) => (
          <MenuItem key={index} value={index}>
            {item}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        fullWidth
        multiline
        rows="3"
        label="Recommendations"
        value={recommendations}
        margin="normal"
        onChange={onInputChange('recommendations')}
      />
    </form>
  )
}
