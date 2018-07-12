import React from 'react'
import { isEmpty } from 'lodash'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeReportTitle } from '../../../functions/'

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
  const generateReport = async () => {
    const {
      cover: { location, inspectionType },
      auditSummary,
      conditionRatingsAdded,
    } = inspection

    closeMenu()

    if (!isEmpty(auditSummary) && conditionRatingsAdded) {
      setFeedback({ error: '', loading: true })

      const pdfDocGenerator = await createPdf(inspection)

      pdfDocGenerator.download(
        `${location.name} - ${makeReportTitle(inspectionType)}.pdf`,
        () => setFeedback({ loading: false })
      )
    } else {
      setFeedback({
        error:
          'Please add audit summary & condition rating to generate report!',
        loading: false,
      })
    }
  }

  const emailReport = async () => {
    const {
      cover: { location, inspectionType },
      auditSummary,
      conditionRatingsAdded,
    } = inspection

    closeMenu()

    if (!isEmpty(auditSummary) && conditionRatingsAdded) {
      setFeedback({ error: '', loading: true })

      const pdfDocGenerator = await createPdf(inspection)
      const url =
        'https://us-central1-inspection-app-49829.cloudfunctions.net/sendEmail'

      pdfDocGenerator.getDataUrl(async dataUrl => {
        const data = {
          filename: `${location.name} - ${makeReportTitle(inspectionType)}.pdf`,
          dataUrl,
          email,
        }

        try {
          await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
          })

          setFeedback({ loading: false, success: 'Report sent as email!' })
        } catch (error) {
          setFeedback({ loading: false, error: 'Sorry, something went wrong!' })
          console.log(error)
        }
      })
    } else {
      setFeedback({
        error:
          'Please add audit summary & condition rating to generate report!',
        loading: false,
      })
    }
  }

  const addImpactTest = () => {
    history.push(`${inspection.id}/impactTest/addAttenuationTest`)
  }

  return (
    <Menu
      anchorEl={menuAnchor}
      open={Boolean(menuAnchor)}
      onClose={closeMenu}
      MenuListProps={{ disablePadding: true }}
    >
      <MenuItem onClick={generateReport}>Generate Report</MenuItem>
      <MenuItem onClick={emailReport}>Email Report</MenuItem>
      {isEmpty(impactGeneralInfo) && (
        <MenuItem onClick={addImpactTest}>Add Impact Test</MenuItem>
      )}
    </Menu>
  )
}
