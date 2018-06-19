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

    canvas {
      margin-top: 8px;
      width: 100%;
      height: 40vw;
      max-height: 250px;

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
