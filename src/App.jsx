import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';
import AboutList from './Components/AboutList';
import Blog from './Components/Blog';
import About from './Components/About';
import Skill from './Components/Skill';
import Services from './Components/Services';
import Counts from './Components/Counts';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Ready from './Components/Ready';
import Prices from './Components/Prices';
import Process from './Components/Process';
import Testmonials from './Components/Testmonials';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import MapPJ from './Components/Mappj';
import Preloader from './Components/Preloader';
import Navgition from './Components/Navgition';
import Header from './Components/Header';

function HomePage() {
  return (
    <>
    <Preloader/>
    <Navgition/>
    <Header/>
      <About title="Who We Are" subtitle="Empower your life">
        <p style={{ color: "gray" }}>
          This is a dynamic child paragraph passed to the component.
        </p>
      </About>
      <AboutList />
      <Skill />
      <Services />
      <Counts />
      <Portfolio />
      <Team />
      <Ready />
      <Prices />
      <Process />
      <Testmonials />
      <Clients />
      <Contact />
      <MapPJ />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutList />} />
          <Route path="/blog" element={<Blog />} />
         
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
