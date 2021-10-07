import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriaBar/CategoriesBar";
import Video from "../../components/video/Video";
import { getPopularVideos } from "../../redux/actions/videos.action";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos } = useSelector((state) => state.homevideos);
  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {videos.map((video) => (
            <Col lg={3} md={4}>
              <Video video={video} key={video.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
