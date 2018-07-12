import { format } from 'date-fns/esm'
import { riskLevels } from '../../../../constants/'
import { closeMenu, exportCSV } from '../../../../functions/'

export const exportComplianceIssues = component => async () => {
  closeMenu(component)()

  const {
    getSelectedItems,
    setSelectMode,
    fetchInspectionsByIdWithComplianceIssues,
    userId,
  } = component.props

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
