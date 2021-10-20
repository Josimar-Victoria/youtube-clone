import moment from "moment";
import React from "react";
import "./styles.scss";
export default function Comment({comment}) {

  const {authorDisplayName,authorProfileImageUrl,textDisplay, publishedAt} = comment
  return (
    <div className="comment p-2 d-flex">
      <img
        src={authorProfileImageUrl}
        alt="imgperson"
        className="rounded-circle me-3"
      />
      <div className="comment__body">
        <p className="comment__header mb-1">
          {authorDisplayName}• {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
}
