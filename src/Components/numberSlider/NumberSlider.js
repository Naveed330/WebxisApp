import React from "react";
import { VscGraph } from "react-icons/vsc";
import { GiTargetPrize } from "react-icons/gi";
import { MdOutlineBusiness } from "react-icons/md";
const NumberSlider = () => {
  return (
    <>
      <div>
        <div className="row mt-5" style={{ backgroundColor: "#4aaeed", }}>
          <div className="col-md-4 col-sm-12 mt-5 d-flex justify-content-center">
            <VscGraph
              style={{ width: "18rem", height: "50px", color: "white" }}
            />
          </div>
          <div className="col-md-4 col-sm-12 mt-5 d-flex justify-content-center">
            <GiTargetPrize
              style={{ width: "18rem", height: "50px", color: "white" }}
            />
          </div>
          <div className="col-md-4 col-sm-12 mt-5 d-flex justify-content-center">
            <MdOutlineBusiness
              style={{ width: "18rem", height: "50px", color: "white" }}
            />
          </div>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#4aaeed" }}>
        <div className="col-md-4  mt-4 col-sm-12 d-flex justify-content-center">
          <h3 style={{ color: "white" }}>
            <strong>300+</strong>
          </h3>
        </div>
        <div className="col-md-4  mt-4 col-sm-12 d-flex justify-content-center">
          <h3 style={{ color: "white" }}>
            <strong>80+</strong>
          </h3>
        </div>
        <div className="col-md-4  mt-4 col-sm-12 d-flex justify-content-center">
          <h3 style={{ color: "white" }}>
            <strong>92%+</strong>
          </h3>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "#4aaeed" ,paddingBottom:"90px"}}>
        <div className="col-md-4 mt-4 col-sm-12 d-flex justify-content-center">
          <h6 style={{ color: "white" }}>SuccessFul Projects Delivered</h6>
        </div>
        <div className="col-md-4  mt-4 col-sm-12 d-flex justify-content-center">
          <h6 style={{ color: "white" }}>Happy Clients</h6>
        </div>
        <div className="col-md-4  mt-4 col-sm-12 d-flex justify-content-center">
          <h6 style={{ color: "white" }}>Business That Comes from Referrals</h6>
        </div>
      </div>
    </>
  );
};

export default NumberSlider;
