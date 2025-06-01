import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import './Style/font-awesome-4.7.0/css/font-awesome.min.css';
import './Style/bootstrap.min.css';
import './Style/owl.carousel.min.css';
import './Style/owl.theme.default.css';
import './Style/style.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
