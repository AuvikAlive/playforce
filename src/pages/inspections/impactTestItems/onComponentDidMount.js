import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {
  onComponentDidMountWithTitleLeftRightNavDelete,
  openMenu,
} from '../../../functions/'
import { deleteImpactTest } from './deleteImpactTest'

export const onComponentDidMount = component => {
  const { generateImpactTestReport, beforeBack } = component.props

  onComponentDidMountWithTitleLeftRightNavDelete(
    component,
    'Impact Testing',
    deleteImpactTest,
    generateImpactTestReport && (
      <IconButton
        color="inherit"
        aria-label="More"
        onClick={openMenu(component)}
      >
        <MoreVertIcon aria-label="More" />
      </IconButton>
    ),
    beforeBack
  )
}
