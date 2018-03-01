import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import ArrowBackIcon from 'material-ui-icons/ArrowBack'
import Tabs from './Tabs'

export class SiteEdit extends Component {
  componentDidMount() {
    const {
      setLeftNavComponent,
      disableNavBarShadow,
      setNavTitle,
      history,
    } = this.props

    setLeftNavComponent(
      <IconButton color="inherit" aria-label="Search" onClick={history.goBack}>
        <ArrowBackIcon />
      </IconButton>,
    )

    disableNavBarShadow()

    // setBottomNavComponent(<Tabs />)

    setNavTitle('Edit Site')
  }

  componentWillUnmount() {
    const {
      removeLefNavComponent,
      removeNavTitle,
      enableNavBarShadow,
    } = this.props

    removeLefNavComponent()
    removeNavTitle()
    enableNavBarShadow()
  }

  render() {
    const { match } = this.props
    const id = parseInt(match.params.id, 10) - 1

    return <Tabs id={id} {...this.props} />
  }
}
