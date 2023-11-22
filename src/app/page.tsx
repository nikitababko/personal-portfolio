import React from 'react';

import { Home, NavBar } from './components';

export default function App() {
  return (
    <div className="app">
      <NavBar />

      <main>
        <Home />
      </main>
    </div>
  );
}
