import React from "react";
import { Layout } from "antd";
import "./App.css";
import Title from "./Components/Title";
import Gretting from "./Components/Greeting";
import Gallery from "./Components/Gallery";
import Location from "./Components/Location";
import CongratulatoryMoney from "./Components/CongratulatoryMoney";
import GroovePaper from "./Assets/GroovePaper.png";

const { Footer } = Layout;

const App = () => {
  return (
    <>
      <Title />
      <Gretting />
      <Gallery />
      <Location />
      <CongratulatoryMoney />
      <Footer
        style={{
          background: "#D7CCC8",
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: "center",
        }}
      >
        Copyright © 2024
      </Footer>
    </>
  );
};

export default App;
