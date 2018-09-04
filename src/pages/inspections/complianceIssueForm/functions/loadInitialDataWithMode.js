import { loadInitialData } from '../../../../functions/'

export const loadInitialDataWithMode = (component, initialData) => {
  if (initialData.playingSurface) {
    initialData.playingSurfaceMode = true
  }

  loadInitialData(component, initialData)
}
