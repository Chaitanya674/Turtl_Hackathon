import React from 'react';
import ReactDOM from 'react-dom/client';
import { EventsContextProvider } from './Events_context';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventsContextProvider>
      <App />
    </EventsContextProvider>
  </React.StrictMode>
);

