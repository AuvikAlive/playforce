import Styled from 'styled-components'
import { Content } from '../../../../../components/content/Content'
import { centerTabContentVertically } from '../centerTabContentVertically'

export const StyledGeneralTab = Styled(Content)`
  ${centerTabContentVertically};

  .card {
    width: 100%;
    position: relative;
  }

  .error {
    color: ${({ theme }) => theme.palette.error.main};
  }

  .loading {
    display: flex;
    justify-content: center;
  }

  .error,
  .loading,
  .submit-button {
    margin-top: 16px;
    margin-bottom: 8px;
  }
`
