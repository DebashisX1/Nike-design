import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Head from './Head.jsx'
import Body from './body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Head></Head>
    <Body></Body>
  </StrictMode>,
)
