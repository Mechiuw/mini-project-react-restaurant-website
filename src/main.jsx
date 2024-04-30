import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./Router/route.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
          {/*<App />*/}
      </RouterProvider>
  </React.StrictMode>,
)
