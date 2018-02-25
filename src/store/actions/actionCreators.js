import {
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  TOGGLE_SIDE_MENU
} from './actionTypes'

export const openSideMenu = () => ({
  type: OPEN_SIDE_MENU
})

export const closeSideMenu = () => ({
  type: CLOSE_SIDE_MENU
})

export const toggleSideMenu = () => ({
  type: TOGGLE_SIDE_MENU
})
