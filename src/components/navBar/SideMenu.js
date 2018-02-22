import React from 'react'
import Drawer from 'material-ui/Drawer'

export const SideMenu = ({ open, closeDrawer }) => (
  <Drawer open={open} anchor={'left'}>
    <div onClick={closeDrawer}>something</div>
  </Drawer>
)
