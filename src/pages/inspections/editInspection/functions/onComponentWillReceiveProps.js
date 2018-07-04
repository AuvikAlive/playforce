import { renderPdf } from './renderPdf'

export const onComponentWillReceiveProps = (component, nextProps) => {
  const { inspection, standardsLoaded } = nextProps
  const dataLoaded =
    inspection.inspectionLoaded &&
    inspection.impactTestsLoaded &&
    standardsLoaded

  dataLoaded && renderPdf(component, inspection)
}
