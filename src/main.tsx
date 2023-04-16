import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  BrowserRouter,
} from "react-router-dom";
import NewsContextProvider from './context/NewsContext';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewsContextProvider>
    <BrowserRouter>
        <App />
      </BrowserRouter>
    </NewsContextProvider>
  </React.StrictMode>,
)
