import { centerContentVertically } from '../../../../styledMixins/centerContentVertically'

export const centerTabContentVertically = `
  ${centerContentVertically};
  min-height: calc(100vh - 56*2px - 48px);

  @media (min-width: 600px) {
    min-height: calc(100vh - 64*2px - 48px);
  }
`
