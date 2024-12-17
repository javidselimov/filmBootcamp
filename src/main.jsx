
import { createRoot } from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
     <BrowserRouter>
     <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  
)
