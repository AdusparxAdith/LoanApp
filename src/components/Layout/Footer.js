import React from "react";
import Slider from "../Slider";
import { UserConsumer } from "../Context/user-context";

const Footer = ({ convert }) => {
  const amountSliderRange = {
    minValue: 500,
    maxValue: 5000
  };
  const durationSliderRange = {
    minValue: 6,
    maxValue: 24
  };
  return (
    <UserConsumer>
      {({ loanValue, updateLoanValue, durationValue, updateDurationValue }) => (
        <div className="footerBoard">
          <div className="footerSection">
            <p>How much do you want to borrow?</p>
            <Slider
              range={amountSliderRange}
              value={loanValue}
              updateValue={updateLoanValue}
            />
            <p>For what duration?</p>
            <Slider
              range={durationSliderRange}
              value={durationValue}
              updateValue={updateDurationValue}
            />
          </div>
        </div>
      )}
    </UserConsumer>
  );
};

export default Footer;
