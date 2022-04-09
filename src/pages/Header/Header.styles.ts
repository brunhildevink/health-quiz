import styled, { keyframes } from 'styled-components'
import { colors } from '../../styles'

const App = styled.div`
  text-align: center;
`

const Code = styled.code`
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
`

const AppHeader = styled.header`
  background-color: ${colors.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const Spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${Spin} infinite 20s linear;
  }
`

const AppLink = styled.a`
  color: ${colors.blue};
`

export { App, Code, AppHeader, Logo, AppLink }
