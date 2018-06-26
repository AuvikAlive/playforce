import React, { Component } from 'react'
import { StyledSelectableList } from './StyledSelectableList'

export class SelectableList extends Component {
  state = {
    scrolling: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false)
  }

  handleScroll = () => {
    this.setState({ scrolling: true })

    window.clearTimeout(this.scrollTimer)

    this.scrollTimer = setTimeout(() => {
      this.setState({ scrolling: false })
    }, 1000)
  }

  handleButtonPress = key => {
    const { setSelectedItems, selectedItems } = this.props

    this.buttonPressTimer = setTimeout(() => {
      if (selectedItems.find(item => item === key)) {
        setSelectedItems(selectedItems.filter(item => item !== key))
      } else {
        setSelectedItems([...selectedItems, key])
      }
    }, 300)
  }

  handleButtonRelease = key => {
    const { selectedItems, selectMode, setSelectMode, handleClick } = this.props

    clearTimeout(this.buttonPressTimer)

    if (selectedItems.length === 0) {
      const { scrolling } = this.state

      !scrolling && !selectMode && handleClick(key)
      setSelectMode(false)
    } else {
      setSelectMode(true, selectedItems.length)
    }
  }

  render() {
    const { ListView, ...props } = this.props

    return (
      <StyledSelectableList className="StyledSelectableList">
        <ListView
          {...props}
          handleButtonPress={this.handleButtonPress}
          handleButtonRelease={this.handleButtonRelease}
        />
      </StyledSelectableList>
    )
  }
}
