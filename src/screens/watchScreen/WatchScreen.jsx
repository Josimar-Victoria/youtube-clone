import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData /VideoMetaData ";
import { getVideoById } from "../../redux/actions/videos.action";
import "./styles.scss";
export default function WatchScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const {video, loading} = useSelector(state => state.selectedVideo);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullscreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {
          !loading ? <VideoMetaData videoId={id} video={video} /> : <h6>cargando ...</h6>
        }
        
        <Comments videoId={id}  />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
}
