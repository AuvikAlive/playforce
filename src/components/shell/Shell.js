import React, { Component } from 'react'
import NavBar from '../navBar'
import SideMenu from '../sideMenu'
import { Footer } from '../footer/Footer'
import Routes from '../routes'
import { StyledMainContent } from './StyledMainContent'

export class Shell extends Component {
  state = {
    navTitle: null,
    leftNavComponent: null,
    rightNavComponent: null,
  }

  setNavTitle = title => {
    this.setState({ navTitle: title })
  }

  removeNavTitle = title => {
    this.setState({ navTitle: null })
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
    const { navTitle, leftNavComponent, rightNavComponent } = this.state

    return (
      <div>
        <NavBar
          title={navTitle}
          leftComponent={leftNavComponent}
          rightComponent={rightNavComponent}
        />
        <SideMenu />
        <StyledMainContent>
          <Routes
            setNavTitle={this.setNavTitle}
            removeNavTitle={this.removeNavTitle}
            setLeftNavComponent={this.setLeftNavComponent}
            removeLefNavComponent={this.removeLefNavComponent}
            setRightNavComponent={this.setRightNavComponent}
            removeRightNavComponent={this.removeRightNavComponent}
          />
        </StyledMainContent>
        <Footer />
      </div>
    )
  }
}
