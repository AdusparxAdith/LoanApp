import React from "react";
import Slider from "./Slider";
import { UserConsumer } from "./Context/user-context";

const Footer = () => {
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
          <p>How much do you want to loan?</p>
          <Slider
            range={amountSliderRange}
            value={loanValue}
            updateValue={updateLoanValue}
          />
          <p>How long will you need?</p>
          <Slider
            range={durationSliderRange}
            value={durationValue}
            updateValue={updateDurationValue}
          />
        </div>
      )}
    </UserConsumer>
  );
};

export default Footer;
