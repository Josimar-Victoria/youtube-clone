import moment from "moment";
import numeral from "numeral";
import React, { useEffect } from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import ShowMoreText from "react-show-more-text";
import { getChannelDetails } from "../../redux/actions/channel.action";

import "./styles.scss";
export default function VideoMetaData({ video: { snippet, statistics } }) {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(viewCount).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </span>
          <div>
            <span className="m-4">
              <MdThumbUp size={26} />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            className="rounded-circle me-3"
            src="https://avatars.githubusercontent.com/u/78392799?v=4"
            alt=""
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>{numeral(100000).format("0.a")} Subscribers </span>
          </div>
        </div>
        <button className="btn border-0 p-2 m-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={2}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
}
