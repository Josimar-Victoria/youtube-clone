import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
import "./styles.scss";
import { useHistory } from "react-router";
import request from "../../service/api";
export default function VideoHorizontal({ video }) {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };

    get_video_details();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  const history = useHistory();
  const handleClick = (e) => {
    history.push(`/watch/${id.videoId}`);
  };
  const segundos = moment.duration(duration).asSeconds();
  const _duration = moment.utc(segundos * 1000).format("mm:ss");
  return (
    <Row className="py-2 m-1" onClick={handleClick}>
      <Col xs={6} md={6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className="videoHorizontal__thumbnail mb-1"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        <span className="videoHorizontal__duration">{_duration}</span>
      </Col>
      <Col xs={6} md={6} className="videoHorizontal__right p-0">
        <p className="videoHorizontal__title mb-1">{title}</p>
        <div className="videoHorizontal__details">
          <AiFillEye />
          {numeral(views).format("0.a")} Views • {moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          <LazyLoadImage
            src="https://avatars.githubusercontent.com/u/78392799?v=4"
            effect="blur"
          />
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
}
