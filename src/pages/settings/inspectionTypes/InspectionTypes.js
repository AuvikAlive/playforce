import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import { InspectionTypeList } from '../inspectionTypeList/InspectionTypeList'
import { InspectionTypeFormContainer } from '../inspectionTypeForm/InspectionTypeFormContainer'
import { StyledInspectionTypes } from './StyledInspectionTypes'

export class InspectionTypes extends Component {
  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent, addUnsubscriber } = this.context
    const {
      history,
      userId,
      inspectionTypesLoaded,
      fetchInspectionTypesRealTime,
    } = this.props

    setNavTitle('Inspection Types')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !inspectionTypesLoaded &&
      addUnsubscriber(await fetchInspectionTypesRealTime(userId))
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  delete = async id => {
    const { openDialog, deleteInspectionType, userId } = this.props

    openDialog(() => deleteInspectionType(userId, id))
  }

  render() {
    const { inspectionTypes, inspectionTypesLoaded } = this.props

    return inspectionTypesLoaded ? (
      <StyledInspectionTypes className="StyledInspectionTypes">
        <Card className="card">
          <InspectionTypeList
            inspectionTypes={inspectionTypes}
            deletePrompt={this.delete}
          />

          <InspectionTypeFormContainer />
        </Card>
      </StyledInspectionTypes>
    ) : (
      <LinearProgress />
    )
  }
}

InspectionTypes.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
