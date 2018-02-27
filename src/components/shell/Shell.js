import React, { Component } from 'react'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import { Footer } from '../footer/Footer'
import Routes from '../routes'
import { StyledMainContent } from './StyledMainContent'

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
        <StyledMainContent>
          <Routes
            setLeftNavComponent={this.setLeftNavComponent}
            setRightNavComponent={this.setRightNavComponent}
            removeLefNavComponent={this.removeLefNavComponent}
            removeRightNavComponent={this.removeRightNavComponent}
          />
        </StyledMainContent>
        <Footer />
      </div>
    )
  }
}
