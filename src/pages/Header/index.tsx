import React from 'react'
import logo from '../../assets/images/logo.svg'
import { App, Code, AppHeader, Logo } from './Header.styles'
import { Text } from '../../components'

const Header: React.FC = () => (
  <App>
    <AppHeader>
      <Logo src={logo} alt="logo" />
      <Text.Regular>
        Edit <Code>src/App.tsx</Code> and save to reload.
      </Text.Regular>
    </AppHeader>
  </App>
)

export default Header
