import React from 'react';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousel from "./components/myCarousel/my-carousel.component.jsx";
import MyTitleMessage from "./components/title-message/title-message.component.jsx";
import './App.css';

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <MyTitleMessage/>
      </div>
  );
};

export default App;
