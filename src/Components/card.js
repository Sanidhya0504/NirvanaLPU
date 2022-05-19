import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./card.css";
export class Card extends Component {
  render() {
    return (
      <div className="card_wrap">
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={"https://wallpaperaccess.com/full/2040735.jpg"}
              />
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={"https://wallpaperaccess.com/full/2040735.jpg"}
              />
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100"
                src={"https://wallpaperaccess.com/full/2040735.jpg"}
              />
              <Carousel.Caption>
                <h3>Third Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Card;
