import React, { Component } from "react";
import NavBar from "../components/NavBar";

class TakeAction extends Component {
  render() {
    return (
      <div className="imgbox">
        <NavBar />
        <div className="form">
          <h1>HELP END FAMILY SEPARATION</h1>
          <br />
          <h3>DONATE</h3>
          <br />
          <h3>VOLUNTEER</h3>
          <br />
          <h3>HOST SCREENING</h3>
          <br />
          <p className="para">
            We are currently screening the film at various institutions, museums
            and community centers. Please contact us if you are interested in
            screening the film.
          </p>
          <br />
          <h3>SHARE</h3>
          <br />
          <p className="para">
            Spreading the word via digital platforms is crucial in this day and
            age. Please share this website and the film on your social
            platforms.
          </p>
          <br />
          <h3>CONTACT</h3>
          <br />
          <p className="para">
            Please reach out to us <strong>laguerrafilm@gmail.com</strong>
            or please fill out the form below for screening information, media
            inquiries or general questions.
          </p>
        </div>
      </div>
    );
  }
}

export default TakeAction;
