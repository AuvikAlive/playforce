import { tools } from './tools'

export let state = {
  images: [],
  imagesLength: undefined,
  currentSlide: 0,
  tool: tools[0],
  width: 1024,
  color: {
    hex: '#000',
  },
}
