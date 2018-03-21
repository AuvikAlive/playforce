import React from 'react'
import TextField from 'material-ui/TextField'
import { AutoComplete } from '../../components/autoComplete/AutoComplete'

export const MaintenanceIssueForm = ({
  equipments,
  finding,
  equipment,
  recommendations,
  onCustomEquipmentChange,
  onEquipmentChange,
  onInputChange,
  onAutoCompleteChange,
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

      {/* <TextField
        fullWidth
        select
        label="Equipment"
        value={equipment}
        onChange={onInputChange('equipment')}
        margin="normal"
      >
        {equipments.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </TextField> */}

      <AutoComplete
        onChange={onAutoCompleteChange}
        domain={equipments}
        label="Equipment"
        value={equipment}
      />

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
