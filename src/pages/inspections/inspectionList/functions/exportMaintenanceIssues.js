import { format } from 'date-fns/esm'
import { closeMenu, exportCSV } from '../../../../functions/'

export const exportMaintenanceIssues = component => async () => {
  closeMenu(component)()

  const {
    getSelectedItems,
    setSelectMode,
    fetchInspectionsByIdWithMaintenanceIssues,
    userId,
  } = component.props

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
