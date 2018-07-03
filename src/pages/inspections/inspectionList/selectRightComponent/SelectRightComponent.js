import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { format } from 'date-fns/esm'
import { riskLevels } from '../../../../constants/'
import { exportCSV } from './exportCSV'

export class SelectRightComponent extends Component {
  state = {
    menuAnchor: null,
  }

  openMenu = event => {
    this.setState({ menuAnchor: event.currentTarget })
  }

  closeMenu = () => {
    this.setState({ menuAnchor: null })
  }

  archiveInspections = async () => {
    this.closeMenu()

    const {
      archiveInspections,
      userId,
      getSelectedItems,
      setSelectMode,
    } = this.props
    const selectedItems = getSelectedItems()

    try {
      await archiveInspections(userId, selectedItems)
      setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  unarchiveInspections = async () => {
    this.closeMenu()

    const {
      unarchiveInspections,
      userId,
      getSelectedItems,
      setSelectMode,
    } = this.props
    const selectedItems = getSelectedItems()

    try {
      await unarchiveInspections(userId, selectedItems)
      setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  exportComplianceIssues = async () => {
    this.closeMenu()

    const {
      getSelectedItems,
      setSelectMode,
      fetchInspectionsByIdWithComplianceIssues,
      userId,
    } = this.props
    const selectedItems = getSelectedItems()

    try {
      const inspections = await fetchInspectionsByIdWithComplianceIssues(
        userId,
        selectedItems
      )

      let issues = []

      inspections.forEach(
        ({
          name,
          inspectionNumber,
          complianceIssues,
          cover: { inspectionDate, displayName },
        }) => {
          complianceIssues.forEach(
            ({
              id,
              equipment,
              finding,
              standardsClause,
              probability,
              severity,
              recommendations,
            }) => {
              issues.push({
                SITE: name,
                'REPORT NUMBER': inspectionNumber,
                DATE: format(inspectionDate, 'dddd, MMMM DD, YYYY'),
                AUDITOR: displayName,
                ID: id,
                EQUIPMENT: equipment,
                ISSUE: finding,
                CLAUSE: standardsClause,
                'RISK RATING': riskLevels[probability - 1][severity - 1],
                RECOMMENDATIONS: recommendations,
              })
            }
          )
        }
      )

      const fields = [
        'ID',
        'SITE',
        'EQUIPMENT',
        'ISSUE',
        'CLAUSE',
        'RISK RATING',
        'RECOMMENDATIONS',
        'REPORT NUMBER',
        'AUDITOR',
        'DATE',
      ]

      exportCSV(fields, issues, 'complianceIssues')
      setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  exportMaintenanceIssues = async () => {
    this.closeMenu()

    const {
      getSelectedItems,
      setSelectMode,
      fetchInspectionsByIdWithMaintenanceIssues,
      userId,
    } = this.props
    const selectedItems = getSelectedItems()

    try {
      const inspections = await fetchInspectionsByIdWithMaintenanceIssues(
        userId,
        selectedItems
      )
      let issues = []
      inspections.forEach(
        ({
          name,
          inspectionNumber,
          maintenanceIssues,
          cover: { inspectionDate, displayName },
        }) => {
          maintenanceIssues.forEach(
            ({
              id,
              equipment,
              finding,
              standardsClause,
              probability,
              severity,
              recommendations,
            }) => {
              issues.push({
                SITE: name,
                'REPORT NUMBER': inspectionNumber,
                DATE: format(inspectionDate, 'dddd, MMMM DD, YYYY'),
                AUDITOR: displayName,
                ID: id,
                EQUIPMENT: equipment,
                ISSUE: finding,
                RECOMMENDATIONS: recommendations,
              })
            }
          )
        }
      )
      const fields = [
        'ID',
        'SITE',
        'EQUIPMENT',
        'ISSUE',
        'RECOMMENDATIONS',
        'REPORT NUMBER',
        'AUDITOR',
        'DATE',
      ]
      exportCSV(fields, issues, 'maintenanceIssues')
      setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  deleteInspections = async () => {
    this.closeMenu()

    const {
      deleteInspections,
      userId,
      getSelectedItems,
      setSelectMode,
    } = this.props
    const selectedItems = getSelectedItems()

    try {
      await deleteInspections(userId, selectedItems)
      setSelectMode(false)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { unarchive } = this.props
    const { menuAnchor } = this.state

    return (
      <div>
        <IconButton
          color="inherit"
          aria-label="delete"
          onClick={this.deleteInspections}
        >
          <DeleteIcon />
        </IconButton>

        <IconButton color="inherit" aria-label="More" onClick={this.openMenu}>
          <MoreVertIcon aria-label="More" />
        </IconButton>

        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={this.closeMenu}
          MenuListProps={{ disablePadding: true }}
        >
          <MenuItem onClick={this.archiveInspections}>Archive</MenuItem>

          {unarchive && (
            <MenuItem onClick={this.unarchiveInspections}>Unarchive</MenuItem>
          )}

          <MenuItem onClick={this.exportComplianceIssues}>
            Export Compliance Issues
          </MenuItem>

          <MenuItem onClick={this.exportMaintenanceIssues}>
            Export Maintenance Issues
          </MenuItem>
        </Menu>
      </div>
    )
  }
}
