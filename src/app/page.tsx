import React from 'react';

import {
  About,
  Home,
  NavBar,
  Projects,
} from './components';

export default function App() {
  return (
    <div className="app">
      <NavBar />

      <main>
        <Home />

        <About />

        <Projects />
      </main>
    </div>
  );
}
