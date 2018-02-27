import React, { Component } from 'react'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import { Footer } from '../footer/Footer'
import Routes from '../routes'
import { StyledContentArea } from './StyledContentArea'

export class Shell extends Component {
  state = {
    leftNavComponent: null,
    rightNavComponent: null,
  }

  setLeftNavComponent = component => {
    this.setState({ leftNavComponent: component })
  }

  setRightNavComponent = component => {
    this.setState({ rightNavComponent: component })
  }

  removeLefNavComponent = () => {
    this.setState({ leftNavComponent: null })
  }

  removeRightNavComponent = () => {
    this.setState({ rightNavComponent: null })
  }

  render() {
    const { leftNavComponent, rightNavComponent } = this.state

    return (
      <div>
        <NavBar
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
        />
        <SideMenu />
        <Routes
          setLeftNavComponent={this.setLeftNavComponent}
          setRightNavComponent={this.setRightNavComponent}
          removeLefNavComponent={this.removeLefNavComponent}
          removeRightNavComponent={this.removeRightNavComponent}
        />
        <Footer />
      </div>
    )
  }
}
