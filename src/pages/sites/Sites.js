import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import Loadable from '../../components/loadable/LoadableLinear'
import SiteList from './siteList'

const Site = Loadable({
  loader: () => import('./site'),
})

Site.preload()

export class Sites extends Component {
  componentDidMount() {
    const { setNavTitle } = this.context

    setNavTitle('Sites')
  }

  componentWillUnmount() {
    const { removeNavTitle } = this.context

    removeNavTitle()
  }
  render() {
    return (
      <Switch>
        <Route path="/sites/:id" component={Site} />
        <Route path="/sites" component={SiteList} />
      </Switch>
    )
  }
}

Sites.contextTypes = {
  setNavTitle: PropTypes.func,
  removeNavTitle: PropTypes.func,
}
