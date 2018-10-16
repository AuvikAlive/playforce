import React from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { StyledNavLink } from '../styledNavLink/StyledNavLink'
import { StyledAddButton } from './StyledAddButton'

export const AddButton = ({ pulse, to, onClick }) => {
  return (
    <StyledAddButton className="StyledAddButton">
      {to && (
        <StyledNavLink to={to}>
          <Button
            variant="fab"
            color="secondary"
            aria-label="add item"
            className={pulse ? 'pulse' : ''}
          >
            <AddIcon />
          </Button>
        </StyledNavLink>
      )}

      {onClick && (
        <Button
          variant="fab"
          color="secondary"
          aria-label="add item"
          className={pulse ? 'pulse' : ''}
          {...{ onClick }}
        >
          <AddIcon />
        </Button>
      )}
    </StyledAddButton>
  )
}
