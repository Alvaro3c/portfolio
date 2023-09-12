import React from "react";
import About from './About/About'
import Contact from './Contact/Contact'
import Heading from './Heading/Heading'
import Proyects from './Proyects/Proyects'

const Main = () => {
  return <>
    <main>
      <Heading />
      <About />
      <Proyects />
      <Contact />
    </main>

  </>

};

export default Main;
