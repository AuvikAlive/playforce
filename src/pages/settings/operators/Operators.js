import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import { OperatorList } from '../../../components/operatorList/OperatorList'
import { OperatorFormContainer } from '../../../components/operatorForm/OperatorFormContainer'
import { contextTypesTitleLeftNavUnsubscriber } from '../../../constants/'
import {
  onComponentWillUnmountWithTitleLeftNav,
  showContentWhenLoaded,
} from '../../../functions/'
import { StyledOperators } from './StyledOperators'
import { onComponentDidMount, deleteOperator } from './functions/'

export class Operators extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  componentWillUnmount() {
    onComponentWillUnmountWithTitleLeftNav(this)
  }

  render() {
    const { operatorsLoaded, operators } = this.props

    return showContentWhenLoaded(
      operatorsLoaded,
      <StyledOperators className="StyledOperators">
        <Card className="card">
          <OperatorList
            operators={operators}
            deletePrompt={deleteOperator(this)}
          />
          <OperatorFormContainer />
        </Card>
      </StyledOperators>
    )
  }
}

Operators.contextTypes = contextTypesTitleLeftNavUnsubscriber
