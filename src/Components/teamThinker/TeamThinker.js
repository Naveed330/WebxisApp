import React from "react";
import nature from "../../Assets/nature.jpg";
import "./teamThinker.css"
const TeamThinker = () => {
  return (
    <>
      <div className="container my-md-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 d">
            <div className="row">
              <div className="col-md-6 px-lg-5">
                <img
                  src={nature}
                  alt="nature"
                  style={{ width: "200px", height: "260px" }}
                  className="first_img"
                />
              </div>
              <div className="col-md-6">
                <div>
                  <img
                    className="mt-5 remove_img"
                    src={nature}
                    alt="nature"
                    style={{ width: "200px", height: "250px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 mt-5 d-flex flex-column justify-content-start align-content-start">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <h3>
                  <strong>
                  We are a Team Of Thinkers , <br />
                  Doers, And Digital Innovators
                  </strong>
              
                </h3>
              </div>
              <div className="col-md-12 col-sm-12">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorum dolore officia doloremque, iure ut eligendi.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  odit pariatur itaque libero eaque eveniet consequuntur
                  laudantium perspiciatis fugit quis.
                </p>
              </div>
              <div className="col-md-12 col-sm-12 mt-lg-4">
                <button type="submit" className="btn btn-primary px-3">
                 <strong>Know More</strong> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamThinker;
