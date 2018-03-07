import Styled from 'styled-components'

export const StyledUserView = Styled.div`
  position: relative;
  height: 169px;

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

  .background {
    img {
      width: 300px;
    }
  }
`
