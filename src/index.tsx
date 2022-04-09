import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Header } from './pages'
import reportWebVitals from './utils/reportWebVitals'
import './styles/base.css'

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(<Header />)

reportWebVitals()
