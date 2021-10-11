import moment from "moment";
import numeral from "numeral";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.scss";
export default function VideoHorizontal() {
  const segundos = moment.duration("100").asSeconds();
  const _duration = moment.utc(segundos * 1000).format("mm:ss");
  return (
    <Row className="videoHorizontal m-1 py-2 align-align-items-center">
      <Col xs={6} md={4} className="videoHorizontal__left">
        <LazyLoadImage
          src="https://avatars.githubusercontent.com/u/78392799?v=4"
          effect="blur"
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="video__top__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={8} className="videoHorizontal__right">
        <p className="videoHorizontal__title mb-1">
          Be a full start developer in 1 month
        </p>
        <div className="videoHorizontal__details">
          <AiFillEye />
          {numeral("100000").format("0.a")} Views •
          {moment("2021-9-11").fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex aligm-align-items-center my-1">
          <LazyLoadImage
            src="https://avatars.githubusercontent.com/u/78392799?v=4"
            effect="blur"
          />
          <p>Josimar Dev</p>
        </div>
      </Col>
    </Row>
  );
}
