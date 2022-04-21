import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecordingsProvider } from './contexts/recordings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecordingsProvider>
      <App />
    </RecordingsProvider>
  </React.StrictMode>
);