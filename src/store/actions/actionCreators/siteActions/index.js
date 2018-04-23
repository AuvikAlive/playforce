import { TOGGLE_SITELIST_VIEW } from '../../actionTypes'
import { saveSite } from './saveSite'
import { fetchSite } from './fetchSite'
import { deleteSite } from './deleteSite'
import { fetchSites } from './fetchSites'
import { fetchSitesRealTime } from './fetchSitesRealTime'
import { searchSites } from './searchSites'

export {
  saveSite,
  fetchSite,
  deleteSite,
  fetchSites,
  fetchSitesRealTime,
  searchSites,
}

export const toggleView = () => ({
  type: TOGGLE_SITELIST_VIEW,
})
