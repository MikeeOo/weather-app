import React from 'react';
import ReactDOM, {Root} from 'react-dom/client';

import {Provider} from "react-redux";
import {store} from "./redux/store";

import App from './layout/App';

const root: Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
          <Provider store={store}>

              <App />
          </Provider>
  </React.StrictMode>
);