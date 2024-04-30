import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './App.css';
import {RouterProvider} from "react-router-dom";
import router from "./Router/route.jsx";
import {Provider} from "react-redux";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}>
          {/*<App />*/}
      </RouterProvider>
      </Provider>
  </React.StrictMode>,
)
