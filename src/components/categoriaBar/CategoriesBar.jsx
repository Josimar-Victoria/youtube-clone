import React, { useState } from "react";
import './categoriesBar.scss'
const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Music",
  "Algorithm Art ",
  "Guitar",
  "Bengali Songs",
  "Coding",
  "Cricket",
  "Football",
  "Real Madrid",
  "Gatsby",
  "Poor Coder",
  "Shwetabh",
];
export default function CategoriesBar() {
  const [activeElement, setActiveElement] = useState("All");

  const handlerClick = (value) => {
    setActiveElement(value);
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
