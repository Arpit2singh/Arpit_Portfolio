import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { BrowserRouter } from "react-router"
import UniversalDataContext from './components/Context/UniversalDataContext.jsx'
// added all the things 

createRoot(document.getElementById('root')).render(
<UniversalDataContext>
<BrowserRouter>
    
    <App />
 </BrowserRouter>
 </UniversalDataContext>
)
