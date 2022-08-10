import React from "react";
import "../Carousal/Carousal.css";
// import leftArrow from "./icons/left-arrow.svg";
// import rightArrow from "./icons/right-arrow.svg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function BtnSlider({ direction, moveSlide }) {
  let prevArrow =
    "https://png.pngtree.com/png-clipart/20190115/ourmid/pngtree-red-arrow-triangle-dotted-line-png-image_368075.jpg";
  let nextArrow =
    "https://png.pngtree.com/png-vector/20210224/ourmid/pngtree-red-arrow-png-image_2933585.jpg";

  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt="hhh" src={direction === "next" ? nextArrow : prevArrow} />
    </button>
  );
}
