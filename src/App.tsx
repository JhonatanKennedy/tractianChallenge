import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AssetsPage } from './Pages/Assets'
import './style/global.scss'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AssetsPage />
    </StrictMode>,
)
