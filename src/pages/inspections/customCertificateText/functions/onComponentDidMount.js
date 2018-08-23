import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
  onComponentDidMountWithTitleLeftNav,
  openMenu,
} from '../../../../functions/'

export const onComponentDidMount = async component => {
  const { addUnsubscriber, setRightNavComponent } = component.context

  const {
    inspectionLoaded,
    fetchInspectionRealTime,
    userId,
    inspectionId,
  } = component.props

  onComponentDidMountWithTitleLeftNav(component, 'Custom Certificate Text')

  setRightNavComponent(
    <IconButton color="inherit" aria-label="More" onClick={openMenu(component)}>
      <MoreVertIcon aria-label="More" />
    </IconButton>
  )

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))
}
