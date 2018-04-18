import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Sketch } from '../../../components/sketch/Sketch'
import { FormContainer } from './FormContainer'

class ComplianceIssueFormWithoutRouter extends Component {
  state = { images: [] }

  loadImages = images => {
    this.setState({ images })
  }

  saveImages = images => {
    const { history } = this.props

    this.loadImages(images)
    history.goBack()
  }

  render() {
    const {
      match,
      initialData,
      onSubmit,
      setRightNav,
      removeRightNav,
    } = this.props
    const { images } = this.state
    const dataCopy = Object.assign({}, { ...initialData })

    if (images.length > 0) {
      dataCopy.images = images
    }

    const imagesCopy =
      dataCopy.images &&
      dataCopy.images.map(({ image, imageNaturalAspectRatio }) =>
        Object.assign({}, { image, imageNaturalAspectRatio })
      )

    return (
      <Switch>
        <Route
          path={`${match.url}/editImages`}
          component={() => (
            <Sketch images={imagesCopy} onSubmit={this.saveImages} />
          )}
        />
        <Route
          path={match.url}
          component={() => (
            <FormContainer
              setRightNav={setRightNav}
              removeRightNav={removeRightNav}
              onSubmit={onSubmit}
              initialData={dataCopy}
              loadImages={this.loadImages}
            />
          )}
        />
      </Switch>
    )
  }
}

export const ComplianceIssueForm = withRouter(ComplianceIssueFormWithoutRouter)
