import React from "react";
import { Card, Button } from "react-bootstrap";
import laptop from "../../Assets/Ulaptop.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./cardslider.css"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// const swiper = new Swiper(".swiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       spaceBetween: 20,
//     },
//     480: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     640: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//   },
// });

const data = [
  {
    id: 1,
    title: "Consumer",
    image: require("../../Assets/comma.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
      imagetwo : require("../../Assets/imageone.jpg")

  },
  {
    id: 2,
    title: "Consumer",
    image: require("../../Assets/comma.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
      imagetwo : require("../../Assets/imageone.jpg")

  },
  {
    id: 3,
    title: "Consumer",
    image: require("../../Assets/comma.png"),
    Description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
    imagetwo : require("../../Assets/imageone.jpg")

  },
  {
    id: 4,
    title: "Consumer",
    image: require("../../Assets/comma.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
      imagetwo : require("../../Assets/imageone.jpg")

  },
  {
    id: 5,
    title: "Consumer",
    image: require("../../Assets/comma.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
      imagetwo : require("../../Assets/imageone.jpg")
  },
];

const CardSlider = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-lg-5">
          <div className="col-md-12" style={{ top: "-180px", position: "relative" }}>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              navigation
              swiper
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 0,
                },
                768: {
                  width: 768,
                  slidesPerView: 1,
                },
              }}
              className="py-5 px-5 my-5"
            >
              {data.map((user) => (
                <SwiperSlide key={user.id} className="slide">
                  <Card style={{ width: "20rem" }}  >
                    <Card.Img
                      variant="top"
                      style={{color:"#34ebe8" , width:"30px" }}
                      src={user.image}
                      alt="image"
                      className="mt-5"
                    />
                    <Card.Body>
                      <Card.Text>
                        <p>{user.Description} </p>
                      </Card.Text>
                      <div className="row">
                      <div className="col-md-2 col-sm-3">
                        <img
                          src={user.imagetwo}
                          alt="imageone"
                          style={{ width: "40px", borderRadius: "20px" }}
                        />
                      </div>
                      <div className="col-md-10 col-sm-9">
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                        </p>
                      </div>
                    </div>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-4 mt-5 d-flex justify-content-center col-sm-12">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={laptop} alt="image" style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>Consumer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <div className="row ">
                    <div className="col-5"> <a href="#">Read More</a> </div>
                    <div className="col-7"> <IoIosArrowRoundForward/> </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-5 d-flex justify-content-center col-sm-12">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={laptop} alt="image" style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>Consumer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <div className="row">
                    <div className="col-5"> <a href="#">Read More</a> </div>
                    <div className="col-7"> <IoIosArrowRoundForward/> </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-5 d-flex justify-content-center col-sm-12">
          <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={laptop} alt="image" style={{height:"200px"}} />
              <Card.Body>
                <Card.Title>Consumer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                <div className="row">
                    <div className="col-5"> <a href="#">Read More</a> </div>
                    <div className="col-7"> <IoIosArrowRoundForward/> </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CardSlider;
