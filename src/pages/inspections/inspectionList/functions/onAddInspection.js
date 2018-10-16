import React from 'react'
import { SelectInspectionType } from '../selectInspectionType/SelectInspectionType'

export const onAddInspection = component => () => {
  const { props, state } = component
  const { openDialog, history, match } = props
  const { inspectionType } = state

  openDialog({
    handleConfirmation: () =>
      history.push(`${match.url}/${component.state.inspectionType}/add`),
    message: 'Select an inspection type',
    contentComponent: (
      <SelectInspectionType
        {...{ inspectionType }}
        setInspectionType={inspectionType =>
          component.setState({ inspectionType })
        }
      />
    ),
  })
}
