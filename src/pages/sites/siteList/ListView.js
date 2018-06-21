import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import CheckIcon from '@material-ui/icons/Check'
import Typography from '@material-ui/core/Typography'

export class ListViewWithout extends Component {
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

  handleClick = id => {
    const { selectMode, history } = this.props

    !selectMode && history.push(`/sites/${id}`)
  }

  handleButtonPress = id => {
    const { setSelectedItems, selectedItems } = this.props

    this.buttonPressTimer = setTimeout(() => {
      if (selectedItems.find(item => item === id)) {
        setSelectedItems(selectedItems.filter(item => item !== id))
      } else {
        setSelectedItems([...selectedItems, id])
      }
    }, 300)
  }

  handleButtonRelease = id => {
    const { selectedItems, setSelectMode } = this.props

    clearTimeout(this.buttonPressTimer)

    if (selectedItems.length === 0) {
      const { scrolling } = this.state

      !scrolling && this.handleClick(id)

      setSelectMode(false)
    } else {
      setSelectMode(true, selectedItems.length)
    }
  }

  render() {
    const { sites, selectedItems } = this.props

    return sites.length > 0 ? (
      <Paper className="paper">
        <List component="nav" disablePadding>
          {sites.map(({ name, id }, index, list) => {
            const itemSelected = selectedItems.find(item => item === id)
            return (
              <ListItem
                divider
                button
                key={id}
                selected={itemSelected ? true : false}
                className={`list-item ${itemSelected && 'selected'}`}
                onTouchStart={() => this.handleButtonPress(id)}
                onTouchEnd={() => this.handleButtonRelease(id)}
                onMouseDown={() => this.handleButtonPress(id)}
                onMouseUp={() => this.handleButtonRelease(id)}
              >
                <ListItemText primary={name} />
                <ListItemSecondaryAction className="secondary-actions">
                  {itemSelected && (
                    <IconButton
                      color="inherit"
                      aria-label="More"
                      onClick={this.openMenu}
                    >
                      <CheckIcon />
                    </IconButton>
                  )}
                </ListItemSecondaryAction>
              </ListItem>
            )
          })}
        </List>
      </Paper>
    ) : (
      <Typography variant="title" align="center">
        Try adding a site to get started!
      </Typography>
    )
  }
}

export const ListView = withRouter(ListViewWithout)
