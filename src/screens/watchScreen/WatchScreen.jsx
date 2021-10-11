import React from "react";
import { Col, Row } from "react-bootstrap";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData /VideoMetaData ";
import "./styles.scss";
export default function WatchScreen() {
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src="blob:https://www.youtube.com/08be2f22-43d4-4bc7-b23b-fd8c584213c0"
            frameBorder="0"
            title="MY VIDEO"
            allowFullscreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
}
