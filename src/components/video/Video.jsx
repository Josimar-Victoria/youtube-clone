import React from "react";
import { AiFillEye } from "react-icons/ai";
import "./_video.scss";
export default function Video() {
  return (
    <div className="video">
      <div className="video__hover">
        <div className="video__top">
          <img
            src="https://i.ytimg.com/vi/VwP9UqYGtSI/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLC8hXZ4pOsggI3rw9O0tbNV0_wkRw"
            alt="img"
          />
          <span>05:43</span>
        </div>
        <div className="video__title">
          Create app in 5 minutes #Josimar by chintu
        </div>
        <div className="video__details">
          <span>
            <AiFillEye /> 5m Views •
          </span>
          <span>5 day ago</span>
        </div>
      </div>
      <div className="video__channel">
        <img
          className="video__img-cover"
          src="	https://yt3.ggpht.com/ytc/AKedOLT4RvUugVe6Dy5WY1nTTZ5BR_PYVr7xCsyrWyAmkA=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  );
}
