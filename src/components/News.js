import React, { Component } from "react";
import NavBar from "../components/NavBar";

class News extends Component {
  render() {
    return (
      <div className="imgbox">
        <NavBar />
        <div
          style={{
            color: "white",
            fontSize: 36,
            marginTop: -300,
            fontFamily: "Lato, sans-serif"
          }}
        >
          NO BLOG POSTS YET.
        </div>
      </div>
    );
  }
}

export default News;
