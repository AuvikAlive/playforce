import Styled from 'styled-components'

export const StyledSignature = Styled.div`
  margin-top: 16px;
  margin-bottom: 8px;

  .signature-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .m-signature-pad {
    width: 100%;
    padding-top: ${({ aspectRatio }) =>
      aspectRatio ? (1 / aspectRatio) * 100 + '%' : '56.25%'};
    position: relative;

    .m-signature-pad--body {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    canvas {
      margin-top: 8px;
      width: 100%;
      height: 100%;

      /* @media screen and (orientation: landscape) {
        height: calc(${({ theme }) => theme.lanscapeWidth} / 2);
      } */
    }
  }

  .action-buttons {
    > :first-child {
      margin-right: 8px;
    }
  }
`
