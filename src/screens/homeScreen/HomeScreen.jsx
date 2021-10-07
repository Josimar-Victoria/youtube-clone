import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CategoriesBar from "../../components/categoriaBar/CategoriesBar";
import Video from "../../components/video/Video";
import { getPopularVideos } from "../../redux/actions/videos.action";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  
  return (
    <div>
      <Container>
        <CategoriesBar />
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
