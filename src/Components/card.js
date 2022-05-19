import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./card.css";
export class Card extends Component {
  render() {
    return (
      <div className="card_wrap">
        <div className="container-fluid">
          <Carousel>
            <Carousel.Item className="card_height" style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100 card_height"
                src={"https://wallpaperaccess.com/full/2040735.jpg"}
              />
              <Carousel.Caption>
                <h3>First Demo </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="card_height" style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100 card_height"
                src={"https://wallpaperaccess.com/full/2040737.jpg"}
              />
              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="card_height" style={{ height: "300px" }}>
              <img
                style={{ height: "300px" }}
                className="d-block w-100 card_height"
                src={"https://wallpaperaccess.com/full/2040740.jpg"}
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
