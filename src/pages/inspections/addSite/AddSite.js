import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import NavBar from '../../../components/navBar/'
import { StyledMainContent } from '../../../components/shell/StyledMainContent'
import { FormContainer } from '../../sites/addSite/FormContainer'
import { StyledAddSite } from '../../sites/addSite/StyledAddSite'

export class AddSite extends Component {
  componentDidMount() {
    const { operatorsLoaded, fetchOperatorsRealTime, userId } = this.props

    !operatorsLoaded && fetchOperatorsRealTime(userId)
  }

  render() {
    const { operatorsLoaded, closeDialog } = this.props

    return operatorsLoaded ? (
      <div>
        <NavBar
          title="Add Site"
          leftComponent={
            <IconButton
              color="inherit"
              aria-label="close"
              onClick={closeDialog}
            >
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <StyledMainContent className="StyledMainContent">
          <StyledAddSite className="StyledAddSite">
            <FormContainer />
          </StyledAddSite>
        </StyledMainContent>
      </div>
    ) : (
      <LinearProgress />
    )
  }
}
