import React from "react";
import Slider from "./Slider";
const Footer = ({ getResult }) => {
  const amountSliderRange = {
    minValue: 500,
    maxValue: 5000
  };
  const durationSliderRange = {
    minValue: 6,
    maxValue: 24
  };
  return (
    <div className="footerBoard">
      <p>How much do you want to loan?</p>
      <Slider range={amountSliderRange} getResult={getResult} />
      <p>How long will you need?</p>
      <Slider range={durationSliderRange} getResult={getResult} />
    </div>
  );
};

export default Footer;
