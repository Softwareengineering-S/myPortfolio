import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/myCarousel/my-carousel.component.jsx";
import MyTitleMessage from "./components/title-message/title-message.component.jsx";
import About from "./pages/about/about.component";
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
import ProjectTimeline from './components/projects-timeline/projects-timeline.component'
 import Particles from "react-particles-js";
 import { particlesOptions } from "./particlesOptions";
import Footer from './components/footer/footer.component';
import ContactForm from './pages/contact-form/contact-form.component';

import './App.css';

const App = () => {
  return (
    <div  style={{position:"relative"}}>
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage/>
      <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> 
      {/*about me section */}
      <div>
      <Parallax 
       blur={{ min: -30, max: 30 }}
       bgImage={require("./assets/img/parallex/background.webp")}
       bgImageAlt=""
       strength={-200}
      >
        <Container className="container-box rounded">
          <Fade duration={500}>
       <About/>
       </Fade>
       </Container>
       </Parallax>
       </div>
       
      
       <div>
      
        <Container className="container-box rounded">
          <Fade duration={500}>
       <Skills/>
       </Fade>
       </Container>
      
       </div>
       {/*Experience Section*/}
       <div>
      
        <Container className="container-box rounded">
          <Fade duration={500}>

       <Experience/>
       </Fade>
       </Container>
      
       </div>
       <Container className="container-box rounded">
          <Fade duration={500}>
       <ProjectTimeline />
       </Fade>
       </Container>
       <Footer/>
       <ContactForm/>
      
       </div>

      
      

  );
};

export default App;
