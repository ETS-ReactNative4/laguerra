import React, { Component } from "react";
import NavBar from "../components/NavBar";

class About extends Component {
  render() {
    return (
      <div className="imgbox1">
        <NavBar />
        <div className="box">
          <h1>WHAT THIS STORY MEANS TO US</h1>
          <p>
            This film documents the life of an immigrant family who’s narrative
            is becoming increasingly more common in the US. Family separation is
            the direct result of strict immigration policies that rarely to take
            into account personal circumstance and individual values.
            <br />
            <br /> We wanted to tell this story because we witnessed a lack of
            proper representation in the media and strongly believe that honest,
            true storytelling has the ability to bring about change.
            <br />
            <br />
            We had the privilege to follow the Guerra family over the course of
            9 months from August 2016 to April 2017. We hope their story can
            both inspire and educate others.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
