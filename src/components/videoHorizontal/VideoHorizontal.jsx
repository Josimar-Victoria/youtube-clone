import moment from "moment";
import numeral from "numeral";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AiFillEye } from "react-icons/ai";
import "./styles.scss";
import { useHistory } from "react-router";
import request from "../../service/api";
export default function VideoHorizontal({ video, searchScreen }) {
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

  const isvideo = id.kind === "youtube#video";

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
    isvideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channelId/${id.channelId}`);
  };
  const segundos = moment.duration(duration).asSeconds();
  const _duration = moment.utc(segundos * 1000).format("mm:ss");

  const thumbnail = !isvideo && "videoHorizontal__thumbnail-channel";
  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={handleClick}
    >
      <Col xs={6} md={searchScreen ? 4 : 6} className="videoHorizontal__left">
        <LazyLoadImage
          src={medium.url}
          effect="blur"
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isvideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={searchScreen ? 8 : 6}
        className="videoHorizontal__right p-0"
      >
        <p className="videoHorizontal__title mb-1">{title}</p>
        {isvideo && (
          <div className="videoHorizontal__details">
            <AiFillEye />
            {numeral(views).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </div>
        )}
        {isvideo && <p className="mt-1">{description}</p>}
        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {isvideo && <LazyLoadImage src={channelIcon?.url} effect="blur" />}

          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
}
