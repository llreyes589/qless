import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
// import {GlobalProvider} from './context/GlobalState'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <GlobalProvider>
    </GlobalProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

