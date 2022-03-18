import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
  // Client-side-only code
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Slider() {
  return (
    <div>
      <OwlCarousel>
        <div className="item">
          <h4>1</h4>
        </div>
        <div className="item">
          <h4>2</h4>
        </div>
        <div className="item">
          <h4>3</h4>
        </div>
        <div className="item">
          <h4>4</h4>
        </div>
        <div className="item">
          <h4>5</h4>
        </div>
        <div className="item">
          <h4>6</h4>
        </div>
        <div className="item">
          <h4>7</h4>
        </div>
        <div className="item">
          <h4>8</h4>
        </div>
        <div className="item">
          <h4>9</h4>
        </div>
        <div className="item">
          <h4>10</h4>
        </div>
        <div className="item">
          <h4>11</h4>
        </div>
        <div className="item">
          <h4>12</h4>
        </div>
      </OwlCarousel>
    </div>
  );
}
