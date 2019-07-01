import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { UserConsumer } from "./Context/user-context";

const Slider = ({ range: { minValue, maxValue }, getResult }) => {
  const [sliderValue, setSliderValue] = useState(0);
  const handleChange = (updateloanValue, event) => {
    updateloanValue(event.target.value);
  };

  return (
    <Fragment>
      <UserConsumer>
        {({ loanValue, updateloanValue, updatedurationValue }) => (
          <input
            type="range"
            min={minValue}
            max={maxValue}
            value={loanValue}
            className="slider"
            id="myRange"
            onChange={event => handleChange(updateloanValue, event)}
          />
        )}
      </UserConsumer>
    </Fragment>
  );
};

Slider.propTypes = {};

export default Slider;
