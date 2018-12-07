import React from "react"
import Fab from "@material-ui/core/Fab"
import AddIcon from "@material-ui/icons/Add"
import { StyledNavLink } from "../styledNavLink/StyledNavLink"
import { StyledAddButton } from "./StyledAddButton"

export const AddButton = ({ pulse, to, onClick }) => {
  return (
    <StyledAddButton className="StyledAddButton">
      {to && (
        <StyledNavLink to={to}>
          <Fab
            color="secondary"
            aria-label="add item"
            className={pulse ? "pulse" : ""}
          >
            <AddIcon />
          </Fab>
        </StyledNavLink>
      )}

      {onClick && (
        <Fab
          color="secondary"
          aria-label="add item"
          className={pulse ? "pulse" : ""}
          {...{ onClick }}
        >
          <AddIcon />
        </Fab>
      )}
    </StyledAddButton>
  )
}
