import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdWifiCalling1 } from "react-icons/md";
import { GiLoveLetter } from "react-icons/gi";
import "./footer.css"
const Footer = () => {
  return (
    <div
      className="d-flex  flex-md-row flex-column gap-3 my-2  justify-content-center text-center"
      style={{ backgroundColor: "#092f6e" }}
    >
      <div className="col-md-1"></div>
      <div className="col-sm-12 col-md-3 mt-lg-5">
        <h2 style={{ color: "white" }}>
          {" "}
          <strong> Webix</strong>
        </h2>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          sunt hic eum. Repudiandae repellat hic totam. Aliquam tenetur aperiam
          iste laborum architecto! Numquam accusamus similique provident dolor
          voluptas explicabo temporibus vero minus.
        </p>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Enter Your Email Address"
            className="me-2"
            aria-label="Search"
            width="80px"
          />
          <Button variant="dark">Subscribe</Button>
        </Form>
        <div className="d-flex icon_class">
          <div className="col-md-2 mt-lg-3">
            <p style={{ color: "white" }}>Follow</p>
          </div>
          <div className="col-md-2 mt-lg-3">
            <a href="#" style={{ color: "white" }}>
              <AiFillTwitterCircle />
            </a>
          </div>
          <div className="col-md-2 mt-lg-3">
            <a href="#" style={{ color: "white" }}>
              <AiFillFacebook />
            </a>
          </div>
          <div className="col-md-2 mt-lg-3">
            <a href="#" style={{ color: "white" }}>
              <AiFillInstagram />
            </a>
          </div>
          <div className="col-md-2 mt-lg-3">
            <a href="#" style={{ color: "white" }}>
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-2 mt-lg-5">
        <h3 style={{ color: "white" }}>Whrer we Help</h3>
        <p style={{ color: "white" }}>Industries</p>
        <p style={{ color: "white" }}>MVP Process</p>
        <p style={{ color: "white" }}>Workshops</p>
        <p style={{ color: "white" }}>Define</p>
        <p style={{ color: "white" }}>Design</p>
        <p style={{ color: "white" }}>Develop</p>
        <p style={{ color: "white" }}>Deploy</p>
      </div>
      <div className="col-sm-12 col-md-2 mt-lg-5">
        <h3 style={{ color: "white" }}>About Us</h3>
        <p style={{ color: "white" }}>Customer</p>
        <p style={{ color: "white" }}>Portfolio</p>
        <p style={{ color: "white" }}>Career</p>
        <p style={{ color: "white" }}>Blog</p>
        <p style={{ color: "white" }}>Contact Form</p>
      </div>
      <div className="col-sm-12 col-md-2 mt-lg-5">
        <h3 style={{ color: "white" }}>Contact</h3>
        <p style={{ color: "white" }}>
          <HiOutlineLocationMarker /> Silicon Valley USA California
        </p>
        <p style={{ color: "white" }}>
          <GiLoveLetter /> success@gmail.com
        </p>
        <p style={{ color: "white" }}>
          <MdWifiCalling1 /> +90405 88774466 1
        </p>
      </div>
      <div className="col-sm-12 col-md-1"></div>
    </div>
  );
};

export default Footer;
