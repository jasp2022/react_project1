// src/App.js
import React from 'react';
import './App.css';
import Banner from './Banner';
import Menu from './Menu';
import ContentSection from './ContentSection';

function App() {
  return (
    <div className="App">
      <Banner />
      <Menu />
      <main>
        <ContentSection id="seccion1" title="Sección 1" content="Este es el contenido de la sección 1." />
        <ContentSection id="seccion2" title="Sección 2" content="Este es el contenido de la sección 2." />
        <ContentSection id="seccion3" title="Sección 3" content="Este es el contenido de la sección 3." />
      </main>
    </div>
  );
}

export default App;
