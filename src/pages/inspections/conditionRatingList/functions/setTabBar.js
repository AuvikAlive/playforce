import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { equipmentTypes } from '../../../../constants/'

export const setTabBar = component => {
  const { context, state } = component
  const { setBottomNavComponent } = context
  const { value } = state

  setBottomNavComponent(
    <AppBar position="static" style={{ boxShadow: 'none' }}>
      <Tabs
        fullWidth
        value={value}
        onChange={(event, value) => component.setState({ value })}
      >
        {equipmentTypes.map(itemType => (
          <Tab value={itemType} label={itemType} key={itemType} />
        ))}
      </Tabs>
    </AppBar>
  )
}
