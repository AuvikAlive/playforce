import React from 'react'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { SiteFormContainer } from '../siteForm/SiteFormContainer'

export const AddSiteDialog = ({
  addSite,
  userId,
  closeDialog,
  setFeedback,
}) => {
  const submit = async site => {
    await addSite(userId, site)

    closeDialog()
    setFeedback({ success: 'Site published!' })
  }

  return (
    <div>
      <NavBar
        title="Add Site"
        leftComponent={
          <IconButton color="inherit" aria-label="close" onClick={closeDialog}>
            <ArrowBackIcon />
          </IconButton>
        }
      />
      <StyledMainContent className="StyledMainContent">
        <SiteFormContainer onSubmit={submit} />
      </StyledMainContent>
    </div>
  )
}
