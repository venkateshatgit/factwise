import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CelebrityProvider } from './context/celebrity.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CelebrityProvider>
      <App/>
    </CelebrityProvider>
  </React.StrictMode>
);
