import React from 'react'
import Button from '@material-ui/core/Button'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import Modal from '../modal/Modal'
import SignUp from '../../pages/signUp/SignUp'

export const EntryButtons = ({ modalOpen, openDialog, closeDialog }) => (
  <div>
    <StyledNavLink to="/SignIn">
      <Button color="inherit" className="sign-in">
        Sign In
      </Button>
    </StyledNavLink>
    <Button variant="raised" color="secondary" onClick={openDialog}>
      Try Free
    </Button>

    <Modal open={modalOpen} handleClose={closeDialog}>
      <SignUp />
    </Modal>
  </div>
)
