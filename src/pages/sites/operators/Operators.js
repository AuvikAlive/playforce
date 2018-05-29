import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import NavBar from '../../../components/navBar/'
import { StyledMainContent } from '../../../components/shell/StyledMainContent'
import { OperatorList } from '../../settings/operators/OperatorList'
import { FormContainer } from '../../settings/operators/FormContainer'
import { StyledOperators } from '../../settings/operators/StyledOperators'

export class Operators extends Component {
  async componentDidMount() {
    const { addUnsubscriber } = this.context
    const { userId, operatorsLoaded, fetchOperatorsRealTime } = this.props

    !operatorsLoaded && addUnsubscriber(await fetchOperatorsRealTime(userId))
  }

  delete = async id => {
    const { openDialog, deleteOperator, userId } = this.props
    openDialog(() => deleteOperator(userId, id))
  }

  render() {
    const { operators, operatorsLoaded, closeDialog } = this.props

    return operatorsLoaded ? (
      <div>
        <NavBar
          title="Operators"
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
          <StyledOperators className="StyledOperators">
            <Card className="card">
              <OperatorList operators={operators} deletePrompt={this.delete} />
              <FormContainer />
            </Card>
          </StyledOperators>
        </StyledMainContent>
      </div>
    ) : (
      <LinearProgress />
    )
  }
}

Operators.contextTypes = {
  addUnsubscriber: PropTypes.func,
}
