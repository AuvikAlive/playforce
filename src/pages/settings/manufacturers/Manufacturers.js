import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import { ManufacturerList } from '../../../components/manufacturerList/ManufacturerList'
import { ManufacturerFormContainer } from '../../../components/manufacturerForm/ManufacturerFormContainer'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { StyledManufacturers } from './StyledManufacturers'
import { onComponentDidMount, deleteManufacturer } from './functions/'

export class Manufacturers extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { manufacturersLoaded, manufacturers } = this.props

    return showContentWhenLoaded(
      manufacturersLoaded,
      <StyledManufacturers className="StyledManufacturers">
        <Card className="card">
          <ManufacturerList
            manufacturers={manufacturers}
            deletePrompt={deleteManufacturer(this)}
          />

          <ManufacturerFormContainer />
        </Card>
      </StyledManufacturers>
    )
  }
}

Manufacturers.contextTypes = contextTypesTitleLeftNavUnsubscriber
