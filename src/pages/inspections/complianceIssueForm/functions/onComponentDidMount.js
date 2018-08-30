import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { loadInitialData, openMenu } from '../../../../functions/'

export const onComponentDidMount = async component => {
  const {
    commonIssuesLoaded,
    fetchCommonIssuesRealTime,
    userId,
    equipmentsSite,
    siteId,
    fetchEquipmentsRealTime,
    initialData,
    setNav,
  } = component.props

  const { addUnsubscriber } = component.context

  !commonIssuesLoaded &&
    addUnsubscriber(await fetchCommonIssuesRealTime(userId))

  equipmentsSite !== siteId &&
    addUnsubscriber(await fetchEquipmentsRealTime(userId, siteId))

  initialData && loadInitialData(component, initialData)

  setNav &&
    setNav(
      <IconButton
        color="inherit"
        aria-label="More"
        onClick={openMenu(component)}
      >
        <MoreVertIcon aria-label="More" />
      </IconButton>
    )
}
