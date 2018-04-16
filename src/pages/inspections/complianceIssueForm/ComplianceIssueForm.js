import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Sketch } from '../../../components/sketch/Sketch'
import { FormContainer } from './FormContainer'

class ComplianceIssueFormWithoutRouter extends Component {
  state = { images: [] }

  doneEditImages = images => {
    const { history } = this.props

    this.setState({ images })
    history.goBack()
  }

  render() {
    const { match, initialData, onSubmit } = this.props
    const { images } = this.state

    if (images.length > 0) {
      initialData.images = images
    }

    return (
      <Switch>
        <Route
          path={`${match.url}/editImages`}
          component={() => (
            <Sketch
              images={initialData.images}
              onSubmit={this.doneEditImages}
            />
          )}
        />
        <Route
          path={match.url}
          component={() => (
            <FormContainer onSubmit={onSubmit} initialData={initialData} />
          )}
        />
      </Switch>
    )
  }
}

export const ComplianceIssueForm = withRouter(ComplianceIssueFormWithoutRouter)
