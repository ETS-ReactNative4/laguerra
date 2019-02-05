import React, { Component } from "react";
import NavBar from "../components/NavBar";
import playButton from "../images/play.png";
import test from "../videos/test.mov";

class Watch extends Component {
  state = {
    isClicked: false,
    movie: true
  };
  handleMovie = event => {
    if (this.state.movie === false) {
      this.setState({
        movie: true
      });
    }
    this.setState({
      isClicked: true
    });
  };

  exitMovie = event => {
    console.log(event.target);
    this.setState({
      movie: false
    });
  };
  render() {
    console.log(this.state.movie);
    console.log(this.state.isClicked);

    return (
      <div className="imgbox">
        {this.state.isClicked && this.state.movie ? (
          <video
            style={{ width: "100%", height: "100vh" }}
            id="player"
            onClick={this.exitMovie}
            autoPlay
          >
            <source src={test} type="video/ogg" />
          </video>
        ) : (
          <div>
            <NavBar />
            <button
              style={{
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                marginTop: "26%",
                marginLeft: "40%"
              }}
              onClick={this.handleMovie}
            >
              <img
                style={{ width: "50%", height: "50%" }}
                alt="play"
                src={playButton}
              />
            </button>
            <p className="paragraph">A film created by Erin Ramirez</p>
          </div>
        )}
      </div>
    );
  }
}

export default Watch;
