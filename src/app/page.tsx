import React from 'react';

import { About, Home, NavBar } from './components';
import { getData } from './helpers';
import { ENDPOINTS } from './constants';

export default async function App() {
  // const projectsResponse = await getData(
  //   ENDPOINTS.PROJECTS,
  // );
  const aboutResponse = await getData(ENDPOINTS.ABOUT);

  return (
    <div className="app">
      <NavBar />

      <main>
        <Home />

        {aboutResponse && <About data={aboutResponse} />}

        {/* {projectsResponse && ( */}
        {/*  <Projects data={projectsResponse} /> */}
        {/* )} */}
      </main>
    </div>
  );
}
