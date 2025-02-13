import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as JotaiProvider } from 'jotai';
import App from './App';

const queryClient = new QueryClient(); // ✅ Ensure QueryClient is created

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JotaiProvider>
      <QueryClientProvider client={queryClient}> {/* ✅ Wrap the app */}
        <App />
      </QueryClientProvider>
    </JotaiProvider>
  </React.StrictMode>
);
