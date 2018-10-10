import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { onTabChange } from './onTabChange'

export const setTabBar = component => {
  const { context, props } = component
  const { setBottomNavComponent } = context
  const { tabstate } = props.match.params

  setBottomNavComponent(
    <AppBar position="static" style={{ boxShadow: 'none' }}>
      <Tabs fullWidth value={tabstate} onChange={onTabChange(component)}>
        <Tab className="tab-title" value="general" label="General" />
        <Tab className="tab-title" value="inspections" label="Inspections" />
        <Tab className="tab-title" value="equipments" label="Equipments" />
      </Tabs>
    </AppBar>
  )
}
