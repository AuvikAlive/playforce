import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DeleteIcon from '@material-ui/icons/Delete'
import { beforeBack } from './beforeBack'
import { deleteInspection } from './deleteInspection'
import {
  openMenu,
  onComponentDidMountWithTitleLeftNav,
} from '../../../../functions/'
// import { renderPdf } from './renderPdf'

export const onComponentDidMount = async component => {
  const { setRightNavComponent } = component.context
  const { openDialog } = component.props

  onComponentDidMountWithTitleLeftNav(
    component,
    'Edit Inspection',
    beforeBack(component)
  )

  setRightNavComponent(
    <div>
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() =>
          openDialog(deleteInspection(component), 'Delete this inspection?')
        }
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="More"
        onClick={openMenu(component)}
      >
        <MoreVertIcon aria-label="More" />
      </IconButton>
    </div>
  )

  // inspectionLoaded &&
  //   impactTestsLoaded &&
  //   standardsLoaded &&
  //   renderPdf(component, inspection)
}
