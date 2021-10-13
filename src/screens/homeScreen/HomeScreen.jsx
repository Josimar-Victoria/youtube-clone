import React, { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriaBar/CategoriesBar";
import Video from "../../components/video/Video";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import Skeleton from "react-loading-skeleton";
import SkeletonVideo from "../../components/skeletonVideo/SkeletonVideo";

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homevideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };
  return (
    <div>
      <Container>
        <CategoriesBar />

        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-lg-block mx-auto"></div>
          }
          className="row"
        >
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
              ))
            : [...Array(20)].map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Container>
    </div>
  );
}
