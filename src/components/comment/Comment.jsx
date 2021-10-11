import moment from "moment";
import React from "react";
import "./styles.scss";
export default function Comment() {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://avatars.githubusercontent.com/u/78392799?v=4"
        alt="imgperson"
        className="rounded-circle me-3"
      />
      <div className="comment__body">
        <p className="comment__header mb-1">
          Josimar V • {moment("2021-9-11").fromNow()}
        </p>
        <p className="mb-0">Nice Video DUDE!!!</p>
      </div>
    </div>
  );
}
