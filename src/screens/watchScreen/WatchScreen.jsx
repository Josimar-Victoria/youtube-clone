import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Comments from "../../components/comments/Comments";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import VideoMetaData from "../../components/videoMetaData /VideoMetaData ";
import {
  getRelatedVideos,
  getVideoById,
} from "../../redux/actions/videos.action";
import "./styles.scss";
export default function WatchScreen() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
    dispatch(getRelatedVideos(id));
  }, [dispatch, id]);
  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideo
  );
  const { video, loading } = useSelector((state) => state.selectedVideo);
  console.log(video);
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
        {!loading ? (
          <VideoMetaData videoId={id} video={video} />
        ) : (
          <h6>cargando ...</h6>
        )}

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!loading ?
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoHorizontal video={video} key={video.id.videoId} />
            ))
            : <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
              <Skeleton width='100%' height='100%' count={30}/>
            </SkeletonTheme>
            }
      </Col>
    </Row>
  );
}
