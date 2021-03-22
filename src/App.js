import React from 'react';
import Fade from 'react-reveal/Fade';
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/myCarousel/my-carousel.component.jsx";
import MyTitleMessage from "./components/title-message/title-message.component.jsx";
import About from "./pages/about/about.component";

import './App.css';

const App = () => {
  return (
    <div className="App" style={{position:"relative"}}>
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage/>
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
      </div>
  );
};

export default App;
