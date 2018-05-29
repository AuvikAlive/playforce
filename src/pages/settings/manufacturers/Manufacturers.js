import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import { ManufacturerList } from '../../../components/manufacturerList/ManufacturerList'
import { ManufacturerFormContainer } from '../../../components/manufacturerForm/ManufacturerFormContainer'
import { StyledManufacturers } from './StyledManufacturers'

export class Manufacturers extends Component {
  async componentDidMount() {
    const { setNavTitle, setLeftNavComponent, addUnsubscriber } = this.context
    const {
      history,
      manufacturersLoaded,
      fetchManufacturersRealTime,
      userId,
    } = this.props

    setNavTitle('Manufacturers')

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>
    )

    !manufacturersLoaded &&
      addUnsubscriber(await fetchManufacturersRealTime(userId))
  }

  componentWillUnmount() {
    const { removeNavTitle, removeLefNavComponent } = this.context

    removeNavTitle()
    removeLefNavComponent()
  }

  delete = async id => {
    const { openDialog, deleteManufacturer, userId } = this.props
    openDialog(() => deleteManufacturer(userId, id))
  }

  render() {
    const { manufacturersLoaded, manufacturers } = this.props

    return manufacturersLoaded ? (
      <StyledManufacturers className="StyledManufacturers">
        <Card className="card">
          <ManufacturerList
            manufacturers={manufacturers}
            deletePrompt={this.delete}
          />

          <ManufacturerFormContainer />
        </Card>
      </StyledManufacturers>
    ) : (
      <LinearProgress />
    )
  }
}

Manufacturers.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
  addUnsubscriber: PropTypes.func,
}
