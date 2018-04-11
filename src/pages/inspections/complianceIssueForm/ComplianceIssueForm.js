import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Sketch } from '../../../components/sketch/Sketch'
import { FormContainer } from './FormContainer'

class ComplianceIssueFormWithoutRouter extends Component {
  state = {}

  doneEditImages = images => {
    const { history } = this.props

    history.goBack()
  }

  render() {
    const { match, initialData: { images } } = this.props

    return (
      <Switch>
        <Route
          path={`${match.url}/editImages`}
          component={() => (
            <Sketch images={images} onSubmit={this.doneEditImages} />
          )}
        />
        <Route
          path={match.url}
          component={() => (
            <FormContainer initialData={this.props.initialData} />
          )}
        />
      </Switch>
    )
  }
}

export const ComplianceIssueForm = withRouter(ComplianceIssueFormWithoutRouter)
