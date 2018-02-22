import React from 'react'
import Button from 'material-ui/Button'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import Modal from '../modal/Modal'
import SignUp from '../../pages/signUp/SignUp'

export const EntryButtons = ({ modalOpen, openModal, closeModal }) => (
  <div>
    <StyledNavLink to="/SignIn">
      <Button color="inherit" className="sign-in">
        Sign In
      </Button>
    </StyledNavLink>
    <Button variant="raised" color="secondary" onClick={openModal}>
      Try Free
    </Button>

    <Modal open={modalOpen} handleClose={closeModal}>
      <SignUp />
    </Modal>
  </div>
)
