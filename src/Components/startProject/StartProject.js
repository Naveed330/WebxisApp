import React from "react";
import "./style.css";
import { Button, Form, FormControl } from "react-bootstrap";
const StartProject = () => {
  return (
    <div>
      <div className="row bg_image mt-5 px-5 py-5">
        <div className="col-md-6 col-sm-12 ">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center mt-5">
              <h1 style={{ color: "white" }}>Start A Project Today</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12  d-flex justify-content-center mt-3">
              <h4 style={{ color: "white" }}>Request Proposal</h4>{" "}
              <span style={{ color: "white", width: "190px" }}>
                <hr />
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Enter Your Email Address"
              className="me-2"
              aria-label="Search"
              width="50px"
            />
            <Button variant="dark">Subscribe</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
