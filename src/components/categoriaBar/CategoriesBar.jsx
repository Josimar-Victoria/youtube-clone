import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./categoriesBar.scss";
const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Alofoke",
  "Algorithm Art ",
  "Guitar",
  "Baulio fogon",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Rochy rd",
  "Anuel aa",
];
export default function CategoriesBar() {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handlerClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };
  return (
    <div className="categoriesBas">
      {keywords.map((value, i) => (
        <span
          className={activeElement === value ? "active" : ""}
          onClick={() => handlerClick(value)}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
}
