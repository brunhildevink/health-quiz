import styled from 'styled-components'

import { fonts, typography } from '../../styles'

const sharedCss = `
font-family: ${fonts};
font-size: ${typography.fontSizeText}px;
line-height: ${typography.lineHeightText};

&:first-child {
  margin-top: 0;
}

&:last-child {
  margin-bottom: 0;
}
`

const Bold = styled.p`
  font-weight: ${typography.fontWeightBold};

  ${sharedCss}
`

const Light = styled.p`
  font-weight: ${typography.fontWeightLight};

  ${sharedCss}
`

const Medium = styled.p`
  font-weight: ${typography.fontWeightMedium};

  ${sharedCss}
`

const Regular = styled.p`
  font-weight: ${typography.fontWeightRegular};

  ${sharedCss}
`

export default { Bold, Light, Medium, Regular }
