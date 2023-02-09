import React from 'react';
import ReactDOM, {Root} from 'react-dom/client';

import App from './App';

import {Provider} from "react-redux";
import {store} from "./redux/store";

import {BrowserRouter} from "react-router-dom";

const root: Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>

      <Provider store={store}>

          <BrowserRouter>

              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>
);