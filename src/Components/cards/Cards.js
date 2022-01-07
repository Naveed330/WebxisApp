import React from "react";
import adidas from "../../Assets/adidas.png";
import mini from "../../Assets/mini.png";
import amd from "../../Assets/amd.png";
import unity from "../../Assets/unity.png";
import nvidia from "../../Assets/nvidia.png";
import icon from "../../Assets/icon.png";
import audi from "../../Assets/audi.png";
import logo from "../../Assets/logo.png";
import honey from "../../Assets/honey.png";
import intel from "../../Assets/intel.png";
import ITone from "../../Assets/ITone.jpg";
import "./cards.css"
const Cards = () => {
  return (
    <>
      {/* <div className="container-fluid"> */}
        <div className="row mt-5 px-5" style={{ backgroundColor: "#f5f0f3" }}>
          <div className="col-md-12 col-sm-12 d-flex justify-content-center align-content-center mt-5">
            <h3>
             <strong>We Work For The World Best Enterprises, <br />
             <span className="text">Startups & VC's</span> </strong> 
            </h3>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-6 d-flex justify-content-center  mt-5 ">
              <img src={adidas} alt="IT" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2  col-sm-12  d-flex justify-content-center mt-5  ">
              <img src={mini} alt="IT" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2 col-sm-12  d-flex justify-content-center  mt-5 ">
              <img src={amd} alt="IT" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2 col-sm-12  d-flex justify-content-center mt-5  ">
              <img src={unity} alt="IT" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2 col-sm-12  d-flex justify-content-center mt-5  ">
              <img src={nvidia} alt="IT" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2 col-sm-12  d-flex justify-content-center mt-5 ">
              <img src={icon} alt="IT" style={{ width: "100px" }} />
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "90px" }}>
            <div className="col-md-2 d-flex justify-content-center  mt-5 ">
              <img src={audi} alt="ITone" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2  col-sm-12 d-flex justify-content-center  mt-5  ">
              <img src={logo} alt="ITone" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2  col-sm-12 d-flex justify-content-center  mt-5  ">
              <img src={honey} alt="ITone" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2  col-sm-12 d-flex justify-content-center  mt-5  ">
              <img src={intel} alt="ITone" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2  col-sm-12 d-flex justify-content-center  mt-5  ">
              <img src={intel} alt="ITone" style={{ width: "100px" }} />
            </div>
            <div className="col-md-2  col-sm-12 d-flex justify-content-center  mt-5  ">
              <img src={intel} alt="ITone" style={{ width: "100px" }} />
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Cards;
