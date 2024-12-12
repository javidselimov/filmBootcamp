import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { store } from './app/Store.js'

createRoot(document.getElementById('root')).render(
    //  <BrowserRouter>
    <StrictMode>
     <Provider store={store}>
      <App />
    </Provider>
 {/* </BrowserRouter> */}
  </StrictMode>
)
