import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Check if we're hydrating (SSR) or doing a fresh render
const rootElement = document.getElementById("root")!;

if (rootElement.hasChildNodes()) {
  // Hydrate existing SSR content
  hydrateRoot(rootElement, <App />);
} else {
  // Fresh render (fallback for non-SSR)
  const { createRoot } = await import('react-dom/client');
  createRoot(rootElement).render(<App />);
}
