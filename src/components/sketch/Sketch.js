import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SaveIcon from '@material-ui/icons/Save'
import UndoIcon from '@material-ui/icons/Undo'
import RedoIcon from '@material-ui/icons/Redo'
import { CompactPicker } from 'react-color'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import NavBar from '../navBar/'
import { StyledMainContent } from '../styledMainContent/StyledMainContent'
import { Carousel } from '../carousel/Carousel'
import { SketchPad } from './SketchPad'
import { StyledSketch } from './StyledSketch'
import { state, tools } from './constants/'
import {
  onComponentDidMount,
  onSlideChange,
  onPrev,
  onNext,
  onToolSelect,
  onColorChange,
  undo,
  redo,
  onSave,
  submit,
} from './functions/'

export class Sketch extends Component {
  state = state

  componentDidMount() {
    onComponentDidMount(this)
  }

  render() {
    const { images, currentSlide, tool, width, color } = this.state
    const { aspectRatio, closeDialog } = this.props

    const settings = {
      infinite: false,
      autoplay: false,
      draggable: false,
      swipe: false,
      beforeChange: onSlideChange(this),
    }

    return (
      <div>
        <NavBar
          title="Edit Images"
          leftComponent={
            <IconButton
              color="inherit"
              aria-label="close"
              onClick={closeDialog}
            >
              <ArrowBackIcon />
            </IconButton>
          }
        />
        <StyledMainContent className="StyledMainContent">
          <StyledSketch className="StyledSketch">
            <Card className="card">
              <Carousel
                images={images}
                settings={settings}
                ref={c => (this.carouselParent = c)}
                SlideComponent={SketchPad}
                slideProps={{ aspectRatio, width }}
              />

              <div className="sketch-actions">
                <IconButton onClick={onPrev(this)}>
                  <ArrowBackIcon />
                </IconButton>

                <IconButton onClick={onNext(this)}>
                  <ArrowForwardIcon />
                </IconButton>

                <IconButton onClick={onSave(this)}>
                  <SaveIcon />
                </IconButton>

                <IconButton onClick={undo(this, currentSlide)}>
                  <UndoIcon />
                </IconButton>

                <IconButton onClick={redo(this, currentSlide)}>
                  <RedoIcon />
                </IconButton>
              </div>

              <div className="sketch-actions">
                <TextField
                  fullWidth
                  select
                  value={tool}
                  onChange={onToolSelect(this)}
                  margin="none"
                  className="tool-select"
                >
                  {tools.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="sketch-actions color-picker">
                <CompactPicker
                  color={color}
                  onChangeComplete={onColorChange(this)}
                />
              </div>

              <Button
                fullWidth
                variant="raised"
                color="primary"
                className="submit-button"
                onClick={submit(this)}
              >
                save changes
              </Button>
            </Card>
          </StyledSketch>
        </StyledMainContent>
      </div>
    )
  }
}
