import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import { logoName } from "../chat";
import "./slider.css";

export default function CustomSlider() {
  return (
    <div class="slider">
      <div class="slide-track">
        {[
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
          ...logoName,
        ].map((item) => (
          <div className="slide">
            <img src={item} height="100" width="250" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
