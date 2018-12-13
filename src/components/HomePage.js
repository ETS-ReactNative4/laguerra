import React, { Component } from "react";
import NavBar from "../components/NavBar";
import backgroundImg from "../images/house.png";

const style = {
  backgroundImage: `url(${backgroundImg})`,
  width: "100%",
  height: "100vh",
  margin: "auto",
  backgroundSize: "cover"
};
class HomePage extends Component {
  render() {
    return (
      <div className="imgbox">
        <div style={style}>
          <NavBar />
          <div className="MainHeader">La Guerra</div>
          <p className="blurb">A STORY ABOUT A SEPARATED FAMILY.</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
