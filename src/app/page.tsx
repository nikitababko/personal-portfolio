import React from 'react';

import { About, Home, NavBar } from './components';

export default function App() {
  return (
    <div className="app">
      <NavBar />

      <main>
        <Home />

        <About />
      </main>
    </div>
  );
}
