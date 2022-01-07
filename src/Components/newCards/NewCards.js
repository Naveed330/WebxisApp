import React from "react";
import { AiFillFileText, AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiMaterialdesign } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./newcards.css";
const NewCards = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-12 mt-5">
            <div className="card pb-5 card_style" >
              <div className="card-body">
                <div className="card-icon d-flex justify-content-center mt-5">
                  <AiFillFileText
                    style={{ width: "18rem", height: "50px", color: "blue" }}
                  />
                </div>
                <div className="card-title">
                  <h6 className="d-flex justify-content-center mt-3">
                    <strong>Define</strong>{" "}
                  </h6>
                </div>
                <p className="d-flex justify-content-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus commodi blanditiis reprehenderit assumenda
                  necessitatibus inventore cum
                  <br /> odio perferendis a repudiandae.{" "}
                </p>
                <div className="row ">
                  <div className="col-6 a_tag">
                    <a href="#">
                      <strong>Read More</strong>
                    </a>{" "}
                  </div>
                  <div className="col-6">
                    <IoIosArrowRoundForward />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 mt-5">
            <div className="card">
              <div className="card-body">
                <div className="card-icon d-flex justify-content-center mt-5">
                  <SiMaterialdesign
                    style={{ width: "18rem", height: "50px", color: "blue" }}
                  />{" "}
                </div>
                <div className="card-title">
                  <h6 className="d-flex justify-content-center mt-3">
                    <strong>Design</strong>{" "}
                  </h6>{" "}
                </div>
                <p className="d-flex justify-content-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus commodi blanditiis reprehenderit assumenda
                  necessitatibus inventore cum
                  <br /> odio perferendis a repudiandae.{" "}
                </p>
                <div className="row ">
                  <div className="col-5">
                    <a href="#" style={{ color: "black" }}>
                      Read More
                    </a>{" "}
                  </div>
                  <div className="col-7">
                    <IoIosArrowRoundForward />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 mt-5">
            <div className="card pb-5">
              <div className="card-body">
                <div className="card-icon d-flex justify-content-center mt-5">
                  {" "}
                  <FaConnectdevelop
                    style={{ width: "18rem", height: "50px", color: "blue" }}
                  />{" "}
                </div>
                <div className="card-title">
                  <h6 className="d-flex justify-content-center mt-3">
                    <strong>Develop</strong>{" "}
                  </h6>{" "}
                </div>
                <p className="d-flex justify-content-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus commodi blanditiis reprehenderit assumenda
                  necessitatibus inventore cum
                  <br /> odio perferendis a repudiandae.{" "}
                </p>
                <div className="row ">
                  <div className="col-5">
                    <a href="#" style={{ color: "black" }}>
                      Read More
                    </a>{" "}
                  </div>
                  <div className="col-7">
                    <IoIosArrowRoundForward />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 mt-5">
            <div className="card">
              <div className="card-body">
                <div className="card-icon  d-flex justify-content-center mt-5">
                  {" "}
                  <AiOutlineDeploymentUnit
                    style={{ color: "blue", width: "18rem", height: "50px" }}
                  />{" "}
                </div>
                <div className="card-title">
                  <h6 className="d-flex justify-content-center mt-3">
                    <strong>Deploy</strong>{" "}
                  </h6>{" "}
                </div>
                <p className="d-flex justify-content-center">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus commodi blanditiis reprehenderit assumenda
                  necessitatibus inventore cum
                  <br /> odio perferendis a repudiandae.{" "}
                </p>
                <div className="row d-flex justify-content-center">
                  <div className="col-5 ">
                    <a href="#" style={{ color: "black" }}>
                      Read More
                    </a>{" "}
                  </div>
                  <div className="col-7">
                    <IoIosArrowRoundForward />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCards;
