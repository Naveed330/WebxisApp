import React from "react";
import laptop from "../../Assets/laptop.jpg"
const SpendMoney = () => {
  return (
    <>
    <div className="container">
      <div className="row px-5">
        <div className="col-md-6 col-sm-12 mt-5">
          <div className="row">
            <div className="col-md-12 col-sm-12 d-flex justify-content-start">
              <h3>
                <strong>
                  It'll Be A Masterpiece That People <br /> Are More Than Happy
                  To Download, <br /> Share , And Spend Money On.
                </strong>
              </h3>
            </div>

            <div className="col-md-12 col-sm-12">
              <p className="d-flex justify-content-center align-content-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore libero exercitationem repellendus!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur quos ratione aliquam dignissimos aut reiciendis
                cupiditate necessitatibus voluptates sapiente sequi!
              </p>
            </div>

            <div className="col-md-12 col-sm-12 d-flex justify-content-start">
              <button type="submit" className="btn btn-primary px-4">
               <strong>Know More</strong> 
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 mt-5">
            <img src={laptop}  alt="" className="w-100" />
        </div>
      </div>
      </div>
    </>
  );
};

export default SpendMoney;
