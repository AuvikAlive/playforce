import { TOGGLE_SITELIST_VIEW, SET_SITELIST_VIEW } from '../../actionTypes'
import { addSite } from './addSite'
import { fetchSite } from './fetchSite'
import { updateSite } from './updateSite'
import { deleteSite } from './deleteSite'
import { fetchSites } from './fetchSites'
import { fetchSitesRealTime } from './fetchSitesRealTime'
import { searchSites } from './searchSites'

export {
  addSite,
  fetchSite,
  updateSite,
  deleteSite,
  fetchSites,
  fetchSitesRealTime,
  searchSites,
}

export const toggleView = () => ({
  type: TOGGLE_SITELIST_VIEW,
})

export const setView = payload => ({
  type: SET_SITELIST_VIEW,
  payload,
})
