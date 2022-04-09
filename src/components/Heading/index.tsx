import styled from 'styled-components'

import { fonts, typography, breakpoints } from '../../styles'

const sharedCss = `
  font-family: ${fonts};

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const HeadingOne = styled.h1`
  font-size: ${typography.fontSizeHeadingOneMobile}px;
  line-height: ${typography.lineHeightHeadingOneMobile};
  font-weight: ${typography.fontWeightExtraBold};

  @media ${breakpoints.md} {
    font-size: ${typography.fontSizeHeadingOne}px;
    line-height: ${typography.lineHeightHeadingOne};
  }

  ${sharedCss}
`

const HeadingTwo = styled.h2`
  font-size: ${typography.fontSizeHeadingTwoMobile}px;
  line-height: ${typography.lineHeightHeadingTwoMobile};
  font-weight: ${typography.fontWeightBold};

  @media ${breakpoints.md} {
    font-size: ${typography.fontSizeHeadingTwo}px;
    line-height: ${typography.lineHeightHeadingTwo};
  }

  ${sharedCss}
`

const HeadingThree = styled.h3`
  font-size: ${typography.fontSizeHeadingThreeMobile}px;
  line-height: ${typography.lineHeightHeadingThreeMobile};
  font-weight: ${typography.fontWeightBold};

  @media ${breakpoints.md} {
    font-size: ${typography.fontSizeHeadingThree}px;
    line-height: ${typography.lineHeightHeadingThree};
  }

  ${sharedCss}
`

const HeadingFour = styled.h4`
  font-size: ${typography.fontSizeHeadingFourMobile}px;
  line-height: ${typography.lineHeightHeadingFourMobile};
  font-weight: ${typography.fontWeightBold};

  @media ${breakpoints.md} {
    font-size: ${typography.fontSizeHeadingFour}px;
    line-height: ${typography.lineHeightHeadingFour};
  }

  ${sharedCss}
`

export default { HeadingOne, HeadingTwo, HeadingThree, HeadingFour }
