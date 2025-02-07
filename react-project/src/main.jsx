import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'

export const data = createContext()
const value = {
  name:'salman',
  age:18,
  experience: 2
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <data.Provider value={value}>
    <App />
    </data.Provider>
  </StrictMode>,
)
