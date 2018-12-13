import React, { Component } from "react";
import NavBar from "../components/NavBar";
import playButton from "../images/play.png";

class Watch extends Component {
  state = {
    isClicked: false
  };
  handleMovie = event => {
    this.setState({
      isClicked: true
    });
  };
  render() {
    return (
      <div className="imgbox">
        <NavBar />
        <button
          style={{
            background: "none",
            border: "none",
            width: 10,
            height: 10,
            outline: "none",
            cursor: "pointer",
            marginLeft: "47%"
          }}
          onClick={this.handleMovie}
          data-video-url="http://www.w3schools.com/html/mov_bbb.mp4"
        >
          <img src={playButton} />
        </button>
        {this.state.isClicked ? (
          <video style={{ width: "100%" }} id="player" controls />
        ) : null}
        <p className="paragraph">A film created by Erin Ramirez</p>
      </div>
    );
  }
}

export default Watch;
