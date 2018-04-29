import React, { Component } from 'react'
import { LinearProgress } from 'material-ui/Progress'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Card from 'material-ui/Card'
import NavBar from '../../components/navBar/'
import { StyledMainContent } from '../../components/styledMainContent/StyledMainContent'
import { Content } from '../../components/content/Content'
import { OperatorList } from '../operatorList/OperatorList'
import { OperatorForm } from '../operatorForm/OperatorForm'

export class OperatorsDialog extends Component {
  componentDidMount() {
    const { userId, operatorsLoaded, fetchOperatorsRealTime } = this.props

    !operatorsLoaded && fetchOperatorsRealTime(userId)
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
          <Content>
            <Card className="card">
              <OperatorList operators={operators} deletePrompt={this.delete} />
              <OperatorForm />
            </Card>
          </Content>
        </StyledMainContent>
      </div>
    ) : (
      <LinearProgress />
    )
  }
}
