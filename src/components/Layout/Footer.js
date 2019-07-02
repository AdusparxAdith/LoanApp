import React from "react";
import Slider from "../Slider";
import { UserConsumer } from "../Context/user-context";

const Footer = () => {
  /*Initializing slider parameters
  @property  {[number]} minValue [minimum input value for slider] 
  @property  {[number]} maxValue [maximum input value for slider] */
  const amountSliderRange = {
    minValue: 500,
    maxValue: 5000
  };
  const durationSliderRange = {
    minValue: 6,
    maxValue: 24
  };
  return (
    /*Accessing global state as consumer for obtaining input values
     @param  {[function]} updateLoanValue [function to update loan amount] 
     @param  {[function]} updateDurationValue [function to update duration ] 
     @param  {[number]} loanValue [value of inputed loan amount] 
     @param  {[number]} durationValue [value of inputed duration amount ] */
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
