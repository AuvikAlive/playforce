import Styled from "styled-components"

export const StyledUserView = Styled.div`
  position: relative;
  height: 197px;

  .content {
    position: absolute;
    top: 18px;
    left: 18px;
    color: white;
  }

  .avatar {
    width: 64px;
    height: 64px;
    margin-bottom: 18px;
  }

  .avatar-letters {
    color: black;
    background: ${({ theme }) => theme.palette.secondary.main};
  }

  .background {
    width: 300px;
  }

  div.background {
    background: ${({ theme }) => theme.palette.grayBackground};
    /* padding-top: 56.25%; */
    height: 100%;
  }
`

StyledUserView.displayName = "StyledUserView"
