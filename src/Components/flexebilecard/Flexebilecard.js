import React from "react";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
const Flexebilecard = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 mt-3">
            <Card style={{ width: "18rem" }}>
              <div className="row py-3" style={{ backgroundColor: "#cedbde" }}>
                <div className="col-md-12 d-flex justify-content-center py-4">
                  <div>
                    <h5><strong>Basic Plan</strong> </h5>
                  </div>
                </div>
              </div>
              <div className="row" style={{ backgroundColor: "#cedbde" }}>
                <div className="col-md-12 d-flex justify-content-center">
                  <div>
                    <h1 style={{color:"#05cdff"}}>99$</h1>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Per Month
                </Card.Title>
                <Card.Text className="d-flex justify-content-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Business & finance Analysing</ListGroupItem>
                <ListGroupItem>24 Houre Support</ListGroupItem>
                <ListGroupItem>Customer Management</ListGroupItem>
                <ListGroupItem>100GB Bandwidth</ListGroupItem>

              </ListGroup>
              <Card.Body className="d-flex justify-content-center">
                <Button variant="outline-primary" className="px-3">Get Started</Button>
              </Card.Body>
            </Card>
          </div>
          {/* 2nd */}
          <div className="col-md-4 col-sm-12 mt-3">
            <Card style={{ width: "18rem" }}>
              <div className="row py-3" style={{ backgroundColor: "#cedbde" }}>
                <div className="col-md-12 d-flex justify-content-center py-4">
                  <div>
                 <h5><strong>Basic Plan</strong> </h5> 
                  </div>
                </div>
              </div>
              <div className="row" style={{ backgroundColor: "#cedbde" }}>
                <div className="col-md-12 d-flex justify-content-center">
                  <div>
                    <h1 style={{color:"#05cdff"}}>199$</h1>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Per Month
                </Card.Title>
                <Card.Text className="d-flex justify-content-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Business & finance Analysing</ListGroupItem>
                <ListGroupItem>24 Houre Support</ListGroupItem>
                <ListGroupItem>Customer Management</ListGroupItem>
                <ListGroupItem>100GB Bandwidth</ListGroupItem>
              </ListGroup>
              <Card.Body className="d-flex justify-content-center">
                <Button variant="outline-primary" className="px-3">Get Started</Button>
              </Card.Body>
            </Card>
          </div>
          {/* 3rd */}
          <div className="col-md-4 col-sm-12 mt-3">
            <Card style={{ width: "18rem" }}>
              <div className="row py-3" style={{ backgroundColor: "#cedbde" }}>
                <div className="col-md-12 d-flex justify-content-center py-4">
                  <div>
                    <h5> <strong>Basic Plan</strong> </h5>
                  </div>
                </div>
              </div>
              <div className="row" style={{ backgroundColor: "#cedbde" }}>
                <div className="col-md-12 d-flex justify-content-center">
                  <div>
                    <h1 style={{color:"#05cdff"}}>299$</h1>
                  </div>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="d-flex justify-content-center">
                  Per Month
                </Card.Title>
                <Card.Text className="d-flex justify-content-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Business & finance Analysing</ListGroupItem>
                <ListGroupItem>24 Houre Support</ListGroupItem>
                <ListGroupItem>Customer Management</ListGroupItem>
                <ListGroupItem>100GB Bandwidth</ListGroupItem>

              </ListGroup>
              <Card.Body className="d-flex justify-content-center">
                <Button variant="outline-primary" className="px-3" >Get Started</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flexebilecard;
