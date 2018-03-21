import React from 'react'
import TextField from 'material-ui/TextField'
import { MenuItem } from 'material-ui/Menu'
import { InputLabel } from 'material-ui/Input'
import Grid from 'material-ui/Grid'
import { probabilities, severities, riskLevels } from '../../globals/scales'

export const ComplianceIssueForm = ({
  commonIssueIndex,
  commonIssues,
  equipments,
  finding,
  equipment,
  standardsClause,
  probability,
  severity,
  comments,
  recommendations,
  onFindingChange,
  onEquipmentChange,
  onInputChange,
}) => {
  const riskLevel =
    probability && severity ? riskLevels[probability - 1][severity - 1] : ''

  return (
    <form noValidate>
      <TextField
        fullWidth
        select
        label="Select a common issue"
        value={commonIssueIndex}
        onChange={onFindingChange}
        margin="normal"
      >
        {commonIssues.length === 0 ? (
          <MenuItem value={''}>No common issue added yet</MenuItem>
        ) : (
          commonIssues.map(({ finding }, index) => (
            <MenuItem key={index} value={index}>
              {finding}
            </MenuItem>
          ))
        )}
      </TextField>

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
      </TextField>

      <TextField
        fullWidth
        label="Standards Clause"
        value={standardsClause}
        onChange={onInputChange('standardsClause')}
        margin="normal"
      />

      <Grid container>
        <Grid item xs={12}>
          <InputLabel className="risk-assessment">Risk Assessment</InputLabel>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            select
            label="Probability"
            value={probability}
            onChange={onInputChange('probability')}
            margin="normal"
          >
            {probabilities.map(({ probability, value }, index) => (
              <MenuItem key={index} value={value}>
                {probability}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            select
            label="Injury Severity"
            value={severity}
            onChange={onInputChange('severity')}
            margin="normal"
          >
            {severities.map(({ serverity, value }, index) => (
              <MenuItem key={index} value={value}>
                {serverity}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={4}>
          <TextField
            disabled
            label="Risk Level"
            value={riskLevel}
            margin="normal"
          />
        </Grid>
      </Grid>

      <TextField
        fullWidth
        multiline
        rows="3"
        label="Comments"
        value={comments}
        margin="normal"
        onChange={onInputChange('comments')}
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
