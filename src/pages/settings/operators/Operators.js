import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import { OperatorList } from '../../../components/operatorList/OperatorList'
import { OperatorForm } from '../../../components/operatorForm/OperatorForm'
import { StyledOperators } from './StyledOperators'

export class Operators extends Component {
  componentDidMount() {
    const { setNavTitle, setLeftNavComponent } = this.context
    const {
      history,
      userId,
      operatorsLoaded,
      fetchOperatorsRealTime,
    } = this.props

    setNavTitle('Operators')
    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
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

  delete = async id => {
    const { openDialog, deleteOperator, userId } = this.props
    openDialog(() => deleteOperator(userId, id))
  }

  render() {
    const { operatorsLoaded, operators } = this.props

    return operatorsLoaded ? (
      <StyledOperators className="StyledOperators">
        <Card className="card">
          <OperatorList operators={operators} deletePrompt={this.delete} />
          <OperatorForm />
        </Card>
      </StyledOperators>
    ) : (
      <LinearProgress />
    )
  }
}

Operators.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
  setLeftNavComponent: PropTypes.func,
  removeLefNavComponent: PropTypes.func,
}
