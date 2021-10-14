import moment from "moment";
import numeral from "numeral";
import React from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";

import "./styles.scss";
export default function VideoMetaData() {
  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {numeral(1000000).format("0.a")} Views •{" "}
            {moment("2021-09-11").fromNow()}
          </span>
          <div>
            <span className="m-4">
              <MdThumbUp size={26} />
              {numeral(1000000).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(1000000).format("0.a")}
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
            <span>Josimar Dev {""}</span>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ut
          ratione unde quae assumenda. Ea iure, aut ducimus saepe ipsa quibusdam
          perferendis iusto tenetur beatae cumque. Assumenda quam neque maiores?
        </ShowMoreText>
      </div>
    </div>
  );
}
