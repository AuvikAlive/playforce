import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DeleteIcon from '@material-ui/icons/Delete'
import { beforeBack } from './beforeBack'
import { deleteInspection } from './deleteInspection'
import { openMenu } from '../../../../functions/'
// import { renderPdf } from './renderPdf'

export const onComponentDidMount = async component => {
  const {
    setNavTitle,
    setLeftNavComponent,
    setRightNavComponent,
    addUnsubscriber,
  } = component.context

  const {
    openDialog,
    inspection,
    standardsLoaded,
    fetchStandards,
    userId,
    inspectionId,
    fetchInspectionRealTime,
    fetchConditionRatings,
    fetchComplianceIssues,
    fetchMaintenanceIssues,
    fetchImpactTestsRealTime,
    fetchPlayingSufacesRealTime,
  } = component.props

  const {
    inspectionLoaded,
    conditionRatingsLoaded,
    complianceIssuesLoaded,
    maintenanceIssuesLoaded,
    impactTestsLoaded,
    playingSurfacesLoaded,
  } = inspection

  !standardsLoaded && fetchStandards(userId)

  !inspectionLoaded &&
    addUnsubscriber(await fetchInspectionRealTime(userId, inspectionId))

  !conditionRatingsLoaded && fetchConditionRatings(userId, inspectionId)

  !complianceIssuesLoaded && fetchComplianceIssues(userId, inspectionId)

  !maintenanceIssuesLoaded && fetchMaintenanceIssues(userId, inspectionId)

  !impactTestsLoaded &&
    addUnsubscriber(await fetchImpactTestsRealTime(userId, inspectionId))

  !playingSurfacesLoaded &&
    addUnsubscriber(await fetchPlayingSufacesRealTime(userId, inspectionId))

  // inspectionLoaded &&
  //   impactTestsLoaded &&
  //   standardsLoaded &&
  //   renderPdf(component, inspection)

  setNavTitle('Edit Inspection')

  setLeftNavComponent(
    <IconButton
      color="inherit"
      aria-label="navigate back"
      onClick={beforeBack(component)}
    >
      <ArrowBackIcon />
    </IconButton>
  )

  setRightNavComponent(
    <div>
      <IconButton
        color="inherit"
        aria-label="delete condition rating"
        onClick={() => openDialog(deleteInspection(component))}
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
}
