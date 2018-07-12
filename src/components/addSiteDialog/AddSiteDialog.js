import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { SiteFormContainer } from '../siteForm/SiteFormContainer'
import { submit } from './submit'

export const AddSiteDialog = props => {
  const { closeDialog } = props

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
        <SiteFormContainer onSubmit={submit(props)} />
      </StyledMainContent>
    </div>
  )
}
