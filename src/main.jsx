import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { BrowserRouter } from "react-router"
import UniversalDataContext from './components/Context/UniversalDataContext.jsx'
import { TooltipProvider } from './components/ui/tooltip.jsx'
// added all the things 

createRoot(document.getElementById('root')).render(
<UniversalDataContext>
<BrowserRouter>
<TooltipProvider>
    <App />
</TooltipProvider>
 </BrowserRouter>
 </UniversalDataContext>
)

