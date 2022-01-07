import React from "react";
import { Card, Button } from "react-bootstrap";
import laptop from "../../Assets/Ulaptop.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./LastCard.css";

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
    image: require("../../Assets/amd.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
  },
  {
    id: 2,
    title: "Consumer",
    image: require("../../Assets/amd.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
  },
  {
    id: 3,
    title: "Consumer",
    image: require("../../Assets/amd.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
  },
  {
    id: 4,
    title: "Consumer",
    image: require("../../Assets/amd.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
  },
  {
    id: 5,
    title: "Consumer",
    image: require("../../Assets/amd.png"),
    Description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet non ipsam deserunt.",
  },
];

const LastCards = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-lg-5">
          <div className="col-md-12">
            <Swiper
              spaceBetween={10}
              navigation
              slidesPerView={1}
              swiper
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              className=" mx-5 py-5 px-5 swiper"
            >
              {data.map((user) => (
                <SwiperSlide key={user.id} className="slide">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      src={user.image}
                      alt="image"
                      className="imge_slider"
                    />
                    <Card.Body>
                      <Card.Title> {user.title} </Card.Title>
                      <Card.Text>
                        <p>{user.Description} </p>
                      </Card.Text>
                      <a href="#">Read More</a>
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

export default LastCards;
