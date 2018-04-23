import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import { FormContainer } from './FormContainer'
import { StyledAddSite } from './StyledAddSite'

export class AddSite extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      history,
      operatorsLoaded,
      fetchOperatorsRealTime,
      userId,
    } = this.props

    setNavTitle('Add Site')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="go back" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !operatorsLoaded && fetchOperatorsRealTime(userId)
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  render() {
    const { operatorsLoaded } = this.props

    return operatorsLoaded ? (
      <StyledAddSite className="StyledAddSite">
        <FormContainer />
      </StyledAddSite>
    ) : (
      <LinearProgress />
    )
  }
}

AddSite.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
