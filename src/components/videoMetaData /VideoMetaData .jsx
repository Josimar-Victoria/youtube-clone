import moment from "moment";
import numeral from "numeral";
import React from "react";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import "./styles.scss";
export default function VideoMetaData() {
  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5>Video Title</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            <span>{numeral(10000).format("0.a")} Views •</span>
            <span>{moment("2021-10-6").fromNow()}</span>
          </span>

          <div>
            <span className="me-3">
              <MdThumbUp size={26} />
              {numeral(10000).format("0.a")}
            </span>
            <span className="m-3">
              <MdThumbDown size={26} />
              {numeral(1000).format("0.a")}
            </span>
          </div>
        </div>
      </div>
      <div className="py-3 my-2 videoMetaData__channel d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <img
            src="https://avatars.githubusercontent.com/u/78392799?v=4"
            alt=""
            className="me-3 rounded-circle"
          />
          <div className="d-flex flex-column">
            <span>Backbench Coder</span>
            <span>
              {" "}
              <span>{numeral(10000).format("0.a")} Suscribers</span>
            </span>
          </div>
        </div>
        <button className="btn border-0 p-2 me-2">Subscribe</button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={2}
          more="SHOW MORE"
          less="SHOW LESS"
          anchorClass="showMoreText"
          expanded={false}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          ipsum id dicta, molestiae ut labore accusamus in inventore distinctio,
          neque nesciunt a sapiente nostrum pariatur aliquam praesentium
          voluptate nobis repellat.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Veritatis ipsum id dicta, molestiae ut labore
          accusamus in inventore distinctio, neque nesciunt a sapiente nostrum
          pariatur aliquam praesentium voluptate nobis repellat.Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Veritatis ipsum id dicta,
          molestiae ut labore accusamus in inventore distinctio, neque nesciunt
          a sapiente nostrum pariatur aliquam praesentium voluptate nobis
          repellat.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis ipsum id dicta, molestiae ut labore accusamus in inventore
          distinctio, neque nesciunt a sapiente nostrum pariatur aliquam
          praesentium voluptate nobis repellat.Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Veritatis ipsum id dicta, molestiae ut
          labore accusamus in inventore distinctio, neque nesciunt a sapiente
          nostrum pariatur aliquam praesentium voluptate nobis repellat.Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsum id
          dicta, molestiae ut labore accusamus in inventore distinctio, neque
          nesciunt a sapiente nostrum pariatur aliquam praesentium voluptate
          nobis repellat.Lorem, ipsum dolor sit amet consectetur adipisicing
          ipsum dolor sit amet consectetur adipisicing
        </ShowMoreText>
      </div>
    </div>
  );
}
