import React from 'react'
import { isEmpty } from 'lodash'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { generateReport, emailReport } from './functions/'

export const MoreMenu = ({
  closeMenu,
  inspection,
  setFeedback,
  createPdf,
  email,
  menuAnchor,
  impactGeneralInfo,
  history,
}) => {
  return (
    <Menu
      anchorEl={menuAnchor}
      open={Boolean(menuAnchor)}
      onClose={closeMenu}
      MenuListProps={{ disablePadding: true }}
    >
      <MenuItem
        onClick={generateReport({
          inspection,
          closeMenu,
          setFeedback,
          createPdf,
        })}
      >
        Generate Report
      </MenuItem>

      <MenuItem
        onClick={emailReport({
          inspection,
          closeMenu,
          setFeedback,
          createPdf,
          email,
        })}
      >
        Email Report
      </MenuItem>

      {!inspection.playgroundsAdded && (
        <MenuItem
          onClick={() => history.push(`${inspection.id}/playgrounds/add`)}
        >
          Add Playground
        </MenuItem>
      )}

      {isEmpty(impactGeneralInfo) && (
        <MenuItem
          onClick={() =>
            history.push(`${inspection.id}/impactTest/addAttenuationTest`)
          }
        >
          Add Impact Test
        </MenuItem>
      )}
    </Menu>
  )
}
