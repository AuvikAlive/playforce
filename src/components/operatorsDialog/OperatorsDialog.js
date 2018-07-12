import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Card from '@material-ui/core/Card'
import { contextTypesUnsubscriber } from '../../constants/'
import { showContentWhenLoaded } from '../../functions/'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { Content } from '../content/Content'
import { OperatorList } from '../operatorList/OperatorList'
import { OperatorFormContainer } from '../operatorForm/OperatorFormContainer'
import { onComponentDidMount, deleteOperator } from './functions/'

export class OperatorsDialog extends Component {
  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { operators, operatorsLoaded, closeDialog } = this.props

    return showContentWhenLoaded(
      operatorsLoaded,
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
              <OperatorList
                operators={operators}
                deletePrompt={deleteOperator(this)}
              />
              <OperatorFormContainer />
            </Card>
          </Content>
        </StyledMainContent>
      </div>
    )
  }
}

OperatorsDialog.contextTypes = contextTypesUnsubscriber
